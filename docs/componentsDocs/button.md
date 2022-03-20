# Button 
按钮

### 示例
<yzl-button style="margin-right:10px;">默认按钮</yzl-button>

### 基本用法
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
    <yzl-button style="margin-right:10px;">默认按钮</yzl-button>
    <yzl-button plain style="margin-right:10px;">朴素按钮</yzl-button>
    <yzl-button round>圆角按钮</yzl-button>
</p>

```html
<yzl-button>默认按钮</yzl-button>
<yzl-button plain>朴素按钮</yzl-button>
<yzl-button round>圆角按钮</yzl-button>
```

### 带状态用法
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
    <yzl-button style="margin-right:10px;" type="success" >默认按钮</yzl-button>
    <yzl-button plain  type="success" style="margin-right:10px;">朴素按钮</yzl-button>
    <yzl-button round type="success" >圆角按钮</yzl-button>
</p>

```html
<yzl-button type="primary">主要按钮</yzl-button>
<yzl-button type="success">成功按钮</yzl-button>
<yzl-button type="error">错误按钮</yzl-button>
<yzl-button type="warning">警告按钮</yzl-button>

<yzl-button type="primary" plain>主要按钮</yzl-button>
<yzl-button type="success" plain>成功按钮</yzl-button>
<yzl-button type="error" plain>错误按钮</yzl-button>
<yzl-button type="warning" plain>警告按钮</yzl-button>

<yzl-button round>圆角按钮</yzl-button>
<yzl-button type="primary" round>主要按钮</yzl-button>
<yzl-button type="success" round>成功按钮</yzl-button>
<yzl-button type="error" round>错误按钮</yzl-button>
<yzl-button type="warning" round>警告按钮</yzl-button>
```

### 禁用状态

<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button disabled style="margin-right:10px;margin-bottom:5px;">默认按钮</yzl-button>
<yzl-button disabled plain style="margin-right:10px;margin-bottom:5px;">朴素按钮</yzl-button>
<yzl-button disabled round style="margin-right:10px;margin-bottom:5px;">圆角按钮</yzl-button>
<yzl-button type="text" bgColor="#CD5C5C" disabled style="margin-bottom:5px;">文字按钮</yzl-button>
</p>

```html
<yzl-button disabled style="margin-bottom:5px;">默认按钮</yzl-button>
<yzl-button disabled plain style="margin-bottom:5px;">朴素按钮</yzl-button>
<yzl-button type="primary" disabled style="margin-bottom:5px;">主要按钮</yzl-button>
<yzl-button type="success" plain disabled style="margin-bottom:5px;">成功按钮</yzl-button>
<yzl-button type="error" disabled round style="margin-bottom:5px;">错误按钮</yzl-button>
<yzl-button type="warning" disabled circle style="margin-bottom:5px;">圆</yzl-button>
```

### 文字按钮

<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button type="text" bgColor="#CD5C5C" style="margin-right:10px;margin-bottom:5px;">文字按钮</yzl-button>
<yzl-button type="text" bgColor="#CD5C5C" disabled style="margin-bottom:5px;">文字按钮(禁用)</yzl-button>
</p>

```html
<yzl-button type="text" style="margin-bottom:5px;">文字按钮</yzl-button>
<yzl-button type="text" disabled style="margin-bottom:5px;">文字按钮(禁用)</yzl-button>
```

### 圆形按钮

<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button circle style="margin-bottom:5px;">圆</yzl-button>
</p>

```html
<yzl-button bgColor="#CD5C5C" round style="margin-bottom:5px;">自定义颜色按钮</yzl-button>
```


### 自定义颜色按钮

<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button bgColor="#CD5C5C" style="margin-right:10px;margin-bottom:5px;">自定义颜色按钮</yzl-button>
<yzl-button bgColor="#CD5C5C" disabled style="margin-bottom:5px;">自定义颜色(禁用)</yzl-button>
</p>

```html
<yzl-button bgColor="#CD5C5C" style="margin-bottom:5px;">自定义颜色按钮</yzl-button>
<yzl-button bgColor="#CD5C5C" disabled style="margin-bottom:5px;">自定义颜色按钮(禁用)</yzl-button>
```

### 不同尺寸

<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button style="margin-right:10px;margin-bottom:5px;">默认按钮</yzl-button>
<yzl-button size="small" style="margin-right:10px;margin-bottom:5px;">小按钮</yzl-button>
<yzl-button size="mini" style="margin-bottom:5px;">迷你按钮</yzl-button>
</p>

```html
<yzl-button style="margin-bottom:5px;">默认按钮</yzl-button>
<yzl-button size="small" style="margin-bottom:5px;">小按钮</yzl-button>
<yzl-button size="mini" style="margin-bottom:5px;">迷你按钮</yzl-button>
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