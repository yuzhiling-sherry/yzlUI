import radioGroup from './src/main.vue'

radioGroup.install = function (Vue) {
    Vue.component(radioGroup.name, radioGroup);
}

export default radioGroup;