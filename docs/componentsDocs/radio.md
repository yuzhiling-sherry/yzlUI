# Button 
按钮

### 示例
<yzl-button style="margin-right:10px;">默认按钮</yzl-button>

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
<yzl-radio :value="sex" label="1" @click="sexClick">备选项</yzl-radio>
<yzl-radio :value="sex" label="2" @click="sexClick">备选项</yzl-radio>


```html
<yzl-radio value="1" label="1">备选项</yzl-radio>
<yzl-radio value="1" label="2">备选项</yzl-radio>
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

### 单选组
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

### 禁用状态
<script>
export default {
    name: 'App',
    data(){
        return{
            sex:'1',
            name:'sherry'
        }
    },
    methods:{
        sexClick(e){
            this.sex = e
        }
    }
}
</script>
<yzl-radio v-model='sex' :value="sex" label="1" @click="sexClick" disabled>1</yzl-radio>
<yzl-radio v-model='sex' :value="sex" label="2" @click="sexClick" disabled>2</yzl-radio>
<yzl-radio-group v-model='name' group-disabled>
    <yzl-radio :value="name" label="1" @click="sexClick">sherry</yzl-radio>
    <yzl-radio :value="name" label="2" @click="sexClick">benz</yzl-radio>
</yzl-radio-group>

```html
<!--单选项-->
<yzl-radio v-model='sex' :value="sex" label="1" @click="sexClick" disabled>备选项1</yzl-radio>
<yzl-radio v-model='sex' :value="sex" label="2" @click="sexClick" disabled>备选项2</yzl-radio>

<!--单选项组-->
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
| size | 尺寸 |String | false | small / mini | - |
| type | 类型 |String | false | primary / success / warning / danger / info / text | - |
| bgColor | 自定义按钮颜色 |String | false | - | - |
| round | 是否圆角按钮 |Boolean | false | - | false |
| plain | 是否朴素按钮 |Boolean | false | - | false |
| circle | 是否圆形按钮 |Boolean | false | - | false |
| disabled | 是否禁用状态 |Boolean | false | - | false |