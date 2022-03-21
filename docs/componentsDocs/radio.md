# Radio 
单选框

### 示例
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
<yzl-radio :value="sex" label="1" @click="sexClick">备选项1</yzl-radio>
<yzl-radio :value="sex" label="1" @click="sexClick">备选项2</yzl-radio>

### 基本用法
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
<yzl-radio :value="sex" label="1" @click="sexClick">备选项1</yzl-radio>
<yzl-radio :value="sex" label="2" @click="sexClick">备选项2</yzl-radio>


```html
<yzl-radio :value="sex" label="1">备选项1</yzl-radio>
<yzl-radio :value="sex" label="2">备选项2</yzl-radio>
```
```js
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
```

### 禁用状态
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
<yzl-radio v-model='sex' :value="sex" label="1" @click="sexClick" disabled>备选项1</yzl-radio>
<yzl-radio v-model='sex' :value="sex" label="2" @click="sexClick" disabled>备选项2</yzl-radio>

```html
<yzl-radio v-model='sex' :value="sex" label="1" @click="sexClick" disabled>备选项1</yzl-radio>
<yzl-radio v-model='sex' :value="sex" label="2" @click="sexClick" disabled>备选项2</yzl-radio>
```
```js
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
```





### Attributes
| 参数 | 说明 |类型 | 是否必要 | 可选值 | 默认值 |
| --- | --- | --- |   ---   |  ---  |  ---  |
| value | 绑定值 |string / number / boolean | true | - | - |
| v-model | 绑定值 |string / number / boolean | true | - | - |
| label | Radio的value |string / number / boolean | true | - | - |
| disabled | 是否禁用状态 |Boolean | false | - | false |