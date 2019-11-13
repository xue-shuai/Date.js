/*
* Author：xue-shuai
* E-mail：xueshuai_12@163.com
* Web:  http://xueshuai.top
* Date: 2019/11/13
* */


/*
*       给定一个时间，计算n分钟之后的时间
*
*       date时间字符串，中间不能有标点空格     例：2020年01月01日20时20:30
*       min 分钟字符串  例：30分钟
*       format时间格式  例：Y-M-D h:m:s
* */
function afterMin(date,min,format) {
    // 时间转为时间戳
    function timeStamp(date) {
        date = date.replace(/(\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).(\d{2})/,'$1/$2/$3 $4:$5:$6')
        date = new Date(date).getTime()     // 转为时间戳
        return date;
    }
    date = timeStamp(date)
    // console.log(date)   // 当前时间戳
    // 时间戳加时间戳
    function timeStampAdd(date,min) {
        min = parseInt(min);
        min = (min*60)*1000
        return  date + min
    }
    // console.log(timeStampAdd(date,min))  // n分钟之后的时间戳
    // 30分钟之后的时间戳转为时间
    function formatTime (number, format) {
        let time = new Date(number)
        let newArr = []
        let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
        newArr.push(time.getFullYear())
        newArr.push(formatNumber(time.getMonth() + 1))
        newArr.push(formatNumber(time.getDate()))

        newArr.push(formatNumber(time.getHours()))
        newArr.push(formatNumber(time.getMinutes()))
        newArr.push(formatNumber(time.getSeconds()))

        for (let i in newArr) {
            format = format.replace(formatArr[i], newArr[i])
        }
        return format;
    }
    // console.log(formatTime(timeStampAdd(date,min),format)) // n分钟之后的时间

    // 补位函数，个位数前加0
    function formatNumber (n) {
        n = n.toString()
        return n[1] ? n : '0' + n;
    }

    return(formatTime(timeStampAdd(date,min),format))
}

// console.log(toNMin('2019-11-13 09:56:36','30分钟','Y-M-D h:m:s'))