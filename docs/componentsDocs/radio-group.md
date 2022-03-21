# Radio-Group
单选框组

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
<yzl-radio-group v-model='sex'>
    <yzl-radio :value="sex" label="1" @click="sexClick">1</yzl-radio>
    <yzl-radio :value="sex" label="2" @click="sexClick">2</yzl-radio>
    <yzl-radio :value="sex" label="3" @click="sexClick">3</yzl-radio>
</yzl-radio-group>


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
<yzl-radio-group v-model='sex'>
    <yzl-radio :value="sex" label="1" @click="sexClick">备选项1</yzl-radio>
    <yzl-radio :value="sex" label="2" @click="sexClick">备选项2</yzl-radio>
    <yzl-radio :value="sex" label="3" @click="sexClick">备选项3</yzl-radio>
</yzl-radio-group>

```html
<yzl-radio-group v-model='sex'>
    <yzl-radio :value="sex" label="1" @click="sexClick">备选项1</yzl-radio>
    <yzl-radio :value="sex" label="2" @click="sexClick">备选项2</yzl-radio>
    <yzl-radio :value="sex" label="3" @click="sexClick">备选项3</yzl-radio>
</yzl-radio-group>
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

### 禁用状态
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1'
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
<yzl-radio-group v-model='sex' group-disabled>
    <yzl-radio :value="sex" label="1" @click="sexClick">sherry</yzl-radio>
    <yzl-radio :value="sex" label="2" @click="sexClick">benz</yzl-radio>
</yzl-radio-group>

```html
<yzl-radio-group v-model='sex' group-disabled>
    <yzl-radio :value="sex" label="1" @click="sexClick">1</yzl-radio>
    <yzl-radio :value="sex" label="2" @click="sexClick">2</yzl-radio>
    <yzl-radio :value="sex" label="3" @click="sexClick">3</yzl-radio>
</yzl-radio-group>
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
| v-model | 绑定值 |string / number / boolean | true | - | - |
| group-disabled | 是否禁用状态 |Boolean | false | - | false |