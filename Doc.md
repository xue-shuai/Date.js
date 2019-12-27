# Date.js
## 目录
## <a href="#use">1. 使用方法</a>
* <a href="#afterMin">计算n分钟之后的时间</a>
* <a href="#beforeMin">计算n分钟之前的时间</a>
* <a href="#setAct">定时设置活动</a>
## <a href="#assist">2. 辅助方法</a>
* <a href="#toTimeStamp">时间格式转为时间戳</a>
* <a href="#toTime">时间戳转为时间格式</a>
* <a href="#cover">补位函数</a>
## <a href="#dev">3. 开发者</a>

<br>
<hr>
<br>

## <a href="#" id="use">使用方法</a>
### <a href="#" id="afterMin">1. 计算n分钟之后的时间</a>
```调用  afterMin(date,min,format)```
```
date：给定的时间字符串，例如：****/**/** **:**:00[年月日时分秒中间均有且只有一个字符,可任意]
min：分钟字符串，例如：30分钟
format：返回的时间格式，例如：Y-M-D h:m:s
```
### <a href="#" id="beforeMin">2. 计算n分钟之前的时间</a>
```调用  beforeMin(date,min,format)```
```
date：给定的时间字符串，例如：****/**/** **:**:00[年月日时分秒中间均有且只有一个字符,可任意]
min：分钟字符串，例如：30分钟
format：返回的时间格式，例如：Y-M-D h:m:s
```
### <a href="#" id="setAct">3. 定时设置活动</a>
```调用  timer(start_date,end_date,url,method)```
```
start_date: 活动开启时间(时间戳[毫秒级])
end_date: 活动结束时间(时间戳[毫秒级])
url: 请求API
method: 请求方式
```

<br>
<hr>
<br>

## <a href="#" id="assist">辅助方法</a>
### <a href="#" id="toTimeStamp">1. 时间格式转为时间戳</a>
```调用  timeStamp(date)```
```
date：给定的时间字符串，例如：****/**/** **:**:00[年月日时分秒中间均有且只有一个字符,可任意]
**返回该时间格式对应的时间戳**
```
### <a href="#" id="toTime">2. 时间戳转为时间格式</a>
```调用  formatTime(number,format)```
```
number: 时间戳
format: 时间格式("年月日时分秒"分别用'Y','M','D','h','m','s'表示)
**返回该时间戳对应的时间格式**
```
### <a href="#" id="cover">2. 补位函数</a>
```调用  formatNumber(n)```
```
n: 指的是"年,月,日,时,分,秒",如果是个位数则给前面加个0
```

<br>
<hr>
<br>

## <a href="#" id="dev">开发者</a>
> Author：xue-shuai\
> E-mail：xueshuai_12@163.com\
> blogs：https://cnblogs.com/xue-shuai\
> Web:  http://xueshuai.top\
> Date: 2019/11/13
