<template>
  <label
    class="my-radio"
    :class="{
      'is-checked': label === value && (!disabled || !groupDisabled),
      'is-disabled': label === value && (disabled || groupDisabled),
    }"
    @click="clickRadio"
  >
    <span class="my-radio__input">
      <span
        class="my-radio__inner"
        :style="{
          backgroundColor:
            label !== value && (disabled || groupDisabled)
              ? '#E8E8E8'
              : label === value && (disabled || groupDisabled)
              ? '#E8E8E8'
              : '',
          borderColor:
            label !== value && (disabled || groupDisabled)
              ? '#E8E8E8'
              : label === value && (disabled || groupDisabled)
              ? '#E8E8E8'
              : '',
        }"
      ></span>
      <!--真实的radio，被隐藏，去掉.my-radio__original可以看到-->
      <input
        v-model="model"
        name="yalRadio"
        :value="label"
        class="my-radio__original"
        type="radio"
        :disabled="disabled || groupDisabled"
      />
    </span>
    <span
      class="my-radio__label"
      :class="{
        'my-radio__label': label === value && (!disabled && !groupDisabled),
        'is-disabled__label': disabled || groupDisabled,
      }"
    >
      <slot></slot>
      <!--如果没传内容，就用label的值-->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
 
<script>
export default {
  name: "yzl-radio",
  inject: {
    groupDisabled: {
      //是否禁用
      type: Boolean,
      default: false,
    },
  },
  props: {
    label: {
      //接收label
      type: [String, Number, Boolean],
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
    }, // 接收v-model
    name: {
      // 有可能传name
      type: String,
      default: "",
    },
    disabled: {
      //是否禁用
      type: Boolean,
      default: false,
    },
    border: {
      //是否有边框
      type: Boolean,
      default: true,
    },
  },
  computed: {
    model: {
      get() {
        let parent = this.getGroup();
        return parent ? parent.value : this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
  methods: {
    getGroup() {
      let parent = this.$parent || this.$root;
      while (parent && parent.$options.name != "yzl-radio-group") {
        parent = parent.$parent;
      }
      return parent;
    },
    clickRadio(e) {
      // 获取当前点击的值
      //点击时会运行两遍、下面是当e.target.tagName时运行的。还有一个是label的过滤
      if (e.target.tagName === "INPUT") {
        this.$emit("click", e.target.value);
      }
    },
  },
};
</script>
