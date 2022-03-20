import Demo from './demo';
import Card from './card';
import Button from './button';
import Radio from './radio';
import RadioGroup from './radioGroup';

const components = {
    Demo,
    Card,
    Button,
    Radio,
    RadioGroup
}

const install = function (Vue) {
    if(install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key]);
    });
}

const API = {
    install,
}

export default API;