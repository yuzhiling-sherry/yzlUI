# Button 
按钮

### 示例
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button style="margin-right:10px;">默认按钮</yzl-button>
<yzl-button disabled style="margin-right:10px;">默认按钮</yzl-button>
<yzl-button type="success" style="margin-right:10px;">成功按钮</yzl-button>
<yzl-button type="success" disabled>成功按钮(禁用)</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button type="text" bgColor="#CD5C5C" style="margin-right:10px;">文字按钮</yzl-button>
<yzl-button type="text" bgColor="#CD5C5C" disabled>文字按钮(禁用)</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button plain style="margin-right:10px;">朴素按钮</yzl-button>
<yzl-button plain disabled style="margin-right:10px;">朴素按钮</yzl-button>
<yzl-button type="error" plain style="margin-right:10px;">状态朴素按钮</yzl-button>
<yzl-button type="error" plain disabled>朴素按钮(禁用)</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button type="success" round>成功圆角按钮</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button circle>圆</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button style="margin-right:10px;">默认按钮</yzl-button>
<yzl-button size="small" style="margin-right:10px;">小按钮</yzl-button>
<yzl-button size="mini">迷你按钮</yzl-button>
</p>
<p style="display:flex;justify-content:flex-start;align-items:center;flex-wrap: wrap;">
<yzl-button bgColor="#CD5C5C" style="margin-right:10px;">自定义颜色按钮</yzl-button>
<yzl-button bgColor="#CD5C5C" disabled>自定义颜色(禁用)</yzl-button>
</p>

### 基本用法
```html
<p>
<yzl-button>默认按钮</yzl-button>
<yzl-button type="primary">主要按钮</yzl-button>
<yzl-button type="success">成功按钮</yzl-button>
<yzl-button type="error">错误按钮</yzl-button>
<yzl-button type="warning">警告按钮</yzl-button>
</p>
<p>
<yzl-button plain>朴素按钮</yzl-button>
<yzl-button type="primary" plain>主要按钮</yzl-button>
<yzl-button type="success" plain>成功按钮</yzl-button>
<yzl-button type="error" plain>错误按钮</yzl-button>
<yzl-button type="warning" plain>警告按钮</yzl-button>
</p>
<p>
<yzl-button round>圆角按钮</yzl-button>
<yzl-button type="primary" round>主要按钮</yzl-button>
<yzl-button type="success" round>成功按钮</yzl-button>
<yzl-button type="error" round>错误按钮</yzl-button>
<yzl-button type="warning" round>警告按钮</yzl-button>
</p>
```

### 禁用状态
```html
<yzl-button disabled>默认按钮</yzl-button>
<yzl-button disabled plain>朴素按钮</yzl-button>
<yzl-button type="primary" disabled>主要按钮</yzl-button>
<yzl-button type="success" plain disabled>成功按钮</yzl-button>
<yzl-button type="error" disabled round>错误按钮</yzl-button>
<yzl-button type="warning" disabled circle>圆</yzl-button>
```

### 文字按钮
```html
<yzl-button type="text">文字按钮</yzl-button>
<yzl-button type="text" disabled>文字按钮(禁用)</yzl-button>
```

### 自定义颜色按钮
```html
<yzl-button bgColor="#CD5C5C">自定义颜色按钮</yzl-button>
<yzl-button bgColor="#CD5C5C" disabled>自定义颜色按钮(禁用)</yzl-button>
```

### 不同尺寸
```html
<yzl-button>默认按钮</yzl-button>
<yzl-button size="small">小按钮</yzl-button>
<yzl-button size="mini">迷你按钮</yzl-button>
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