<template>
  <div class="yzl-button" :style="styleObject">
    <slot></slot>
  </div>
</template>
<script>
import { colorRgb } from "./color";
export default {
  name: "yzl-button",
  props: {
    size: {
      //大小
      type: String,
      default: "medium",
    },
    type: {
      //类型
      type: String,
      default: "default",
    },
    bgColor: {
      type: String,
      default: "",
    },
    round: {
      //是否为圆角按钮
      type: Boolean,
      default: false,
    },
    plain: {
      //是否为朴素按钮
      type: Boolean,
      default: false,
    },
    circle: {
      //是否为圆形按钮
      type: Boolean,
      default: false,
    },
    disabled: {
      //是否被禁用
      type: Boolean,
      default: false,
    },
  },
  computed: {
    styleObject() {
      return {
        fontSize:
          this.size == "mini" ? "14px" : this.size == "small" ? "16px" : "18px",
        "--cursor": this.disabled ? "not-allowed" : "auto",
        width: this.circle
          ? "40px"
          : this.getButtonWidthAndHeight("width", this.size),
        height: this.circle
          ? "40px"
          : this.getButtonWidthAndHeight("height", this.size),
        borderRadius: this.round ? "100px" : this.circle ? "25px" : "10px",
        "--border-style":
          (["text"].includes(this.type) ? 0 : 1) +
          "px solid " +
          (this.disabled
            ? this.getBorderStyle(this.type, this.bgColor, 1, this.plain)
            : this.getBorderStyle(this.type, this.bgColor, 1, this.plain)),
        "--border-style-hover":
          (["text"].includes(this.type) ? 0 : 1) +
          "px solid " +
          (this.disabled
            ? this.getBorderStyle(this.type, this.bgColor, 1, this.plain)
            : this.getBorderStyle(
                this.type,
                this.bgColor,
                1,
                this.plain,
                true
              )),
        "--font-color": this.disabled
          ? this.getFontStyle(this.type, this.bgColor, 1, this.plain)
          : this.getFontStyle(this.type, this.bgColor, 1, this.plain),
        "--font-color-hover": this.disabled
          ? this.getFontStyle(this.type, this.bgColor, 1, this.plain)
          : this.getFontStyle(this.type, this.bgColor, 1, this.plain, true),
        "--background-color": this.plain
          ? this.getBgStyle(this.type, this.bgColor, 0.4)
          : this.getBgStyle(this.type, this.bgColor, 1),
        "--background-color-hover": this.disabled
          ? this.plain
            ? this.getBgStyle(this.type, this.bgColor, 0.4)
            : this.getBgStyle(this.type, this.bgColor, 1)
          : this.getBgStyle(this.type, this.bgColor, 0.9, this.plain, true),
        "--opacity-bg": this.disabled ? 0.5 : 1,
      };
    },
  },
  methods: {
    selectType(type, colorVal = "#FFB5C5", opacity = 1) {
      //设置按钮类型的颜色
      switch (type) {
        case "info":
          return colorRgb("#FFB5C5", opacity);
        case "default":
          return colorRgb("#FFB5C5", opacity);
        case "primary":
          return colorRgb("#1E90FF", opacity);
        case "success":
          return colorRgb("#66CD00", opacity);
        case "error":
          return colorRgb("#FF4500", opacity);
        case "warning":
          return colorRgb("#FFB90F", opacity);
        default:
          return colorRgb(colorVal, opacity);
      }
    },
    getBorderStyle(type, bgColor, opacity = 1, plain = false, hover = false) {
      //设置按钮边框样式
      return ["text"].includes(type)
        ? "transparent"
        : plain
        ? ["success", "error", "warning", "info"].includes(type)
          ? this.selectType(type, null, opacity)
          : bgColor
          ? colorRgb(bgColor, opacity)
          : hover
          ? this.selectType("default", null, opacity)
          : "#999"
        : ["success", "error", "warning", "info"].includes(type)
        ? this.selectType(type, null, opacity)
        : bgColor
        ? colorRgb(bgColor, opacity)
        : hover
        ? this.selectType("default", null, opacity)
        : "#999";
    },
    getButtonWidthAndHeight(type, size) {
      //设置按钮大小
      if (type == "width") {
        switch (size) {
          case "small":
            return "100px";
          case "mini":
            return "60px";
          default:
            return "140px";
        }
      } else if (type == "height") {
        switch (size) {
          case "small":
            return "30px";
          case "mini":
            return "25px";
          default:
            return "35px";
        }
      }
    },
    getFontStyle(type, bgColor, opacity = 1, plain = false, hover = false) {
      //设置按钮文字样式
      return ["text"].includes(type)
        ? bgColor
          ? hover
            ? colorRgb(bgColor, 0.7)
            : colorRgb(bgColor, opacity)
          : hover
          ? this.selectType("default", null, 0.7)
          : this.selectType("default", null, opacity)
        : plain
        ? ["success", "error", "warning", "info"].includes(type)
          ? hover
            ? colorRgb("#fff", opacity)
            : this.selectType(type, "#fff", opacity)
          : bgColor
          ? hover
            ? colorRgb("#fff", opacity)
            : colorRgb(bgColor, opacity)
          : hover
          ? colorRgb("#FFB5C5", opacity)
          : colorRgb("#333", opacity)
        : ["success", "error", "warning", "info"].includes(type)
        ? colorRgb("#fff", opacity)
        : bgColor
        ? colorRgb("#fff", opacity)
        : hover
        ? colorRgb("#FFB5C5", opacity)
        : colorRgb(bgColor, opacity);
    },
    getBgStyle(type, bgColor, opacity, plain, hover = false) {
      //设置背景颜色
      return ["text"].includes(type)
        ? "transparent"
        : ["success", "error", "warning", "info"].includes(type)
        ? this.selectType(type, null, opacity)
        : bgColor
        ? colorRgb(bgColor, opacity)
        : hover
        ? plain
          ? "transparent"
          : this.selectType("default", null, 0.2)
        : "transparent";
    },
  },
};
</script>
<style lang="scss">
@import './button.scss';
</style>