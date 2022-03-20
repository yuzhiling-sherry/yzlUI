<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "yzl-radio-group",
  provide(){
      return{
        groupDisabled:this.groupDisabled
      }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
    }, // 接收v-model
    groupDisabled: {
      //是否禁用
      type: Boolean,
      default: false,
    },
  },
};
</script>