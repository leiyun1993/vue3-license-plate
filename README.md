# vue3-license-plate

### 介绍
* vue3-license-plate是一款基于vue3的车牌号输入控件。

### vue2版本
[vue-license-plate](https://github.com/leiyun1993/vue2-license-plate)
### 微信小程序版本
[mp-license-plate](https://github.com/leiyun1993/mp-license-plate)

### 项目中使用
* 下载

```
npm install vue3-license-plate
```
* 在main.js中加入

```
import LicensePlate from 'vue3-license-plate'
import 'vue3-license-plate/lib/licensePlate.css'

createApp(App).use(LicensePlate).mount('#app')
```
* 在需要的页面中使用

```
licensePlate: "川A00001"

<LicensePlate v-model="licensePlate" @change="change"></LicensePlate>

change(val){
	console.log(val.array)	//数组形式
	console.log(val.value)	//字符串形式
	console.log(val.pass)	  //是否验证通过
}
```
* 展示如下
![](https://github.com/leiyun1993/vue3-license-plate/raw/main/screenshot/s1.png)

## API

### Props
名字|类型|默认值|说明
--|--|--|--
v-model|String|""| 默认车牌号
autoShow|Boolean|false| 自动展示键盘
borderColor|String|#79aef3| 输入框边框颜色
borderActiveColor|String|#330aec| 输入框选中的边框颜色
borderWidth|Number|1| 边框宽度
borderRadius|Number|6| 边框圆角
fontColor|String|#333333| 文字颜色
fontSize|Number|16| 文字大小

### Events
名字|说明|回调参数
--|--|--
@change|输入改变时触发|{array:[],value:string,pass:false}


## Change Log

* 1.0.0

首次发版



## License
```
MIT License

Copyright (c) 2023 YunLei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
