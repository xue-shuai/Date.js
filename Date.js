
var now = new Date().getTime();//获取当前时间戳毫秒级

//计算n分钟之后的时间
function afterMin(date, min, format) {
    date = timeStamp(date)//当前时间戳
    function timeStampAdd(date,min) {//时间戳加时间戳
        min = parseInt(min);
        min = (min*60)*1000//分钟转为时间戳
        return  date + min
    }
    return(formatTime(timeStampAdd(date,min),format))
}
//计算n分钟之前的时间
function beforeMin(date,min,format) {
    date = timeStamp(date)// 当前时间戳
    function timeStampReduce(date,min) {// 时间戳减时间戳
        min = parseInt(min);
        min = (min*60)*1000
        return  date - min
    }
    return(formatTime(timeStampReduce(date,min),format))
}

//定时设置活动开启与结束
function timer(start_date,end_date,url,method) {
	start_date = timeStamp(start_date);//开始时间转为时间戳
	end_date = timeStamp(end_date);//结束时间转为时间戳
	var start_time = start_date - now;//距离活动开始所剩时间
    var end_time = end_date - now;//距离活动结束所剩时间
    if(end_time < 0){//如果活动截止时间的时间戳小于现在时间的时间戳,则说明活动结束,return false
        console.log('活动已经结束了')
        return false;
    }
	setTimeout(()=>{
		console.log('活动开始')
		/*$.ajax({
			url:url,
			type:method,
			dataType:'json',
			data:{
				status:1
			},
			success:function(res){
				console.log(res)
				console.log('活动开始')
			}
		})*/
	},start_time)
	setTimeout(()=>{
		console.log('活动结束')
		/*$.ajax({
			url:url,
			type:method,
			dataType:'json',
			data:{
				status:0
			},
			success:function(res){
				console.log(res)
				console.log('活动结束')
			}
		})*/
	},end_time)
}



//时间格式转为时间戳
function timeStamp(date) {
    date = date.replace(/(\d{4}).(\d{2}).(\d{2}).(\d{2}).(\d{2}).(\d{2})/,'$1/$2/$3 $4:$5:$6')
    date = new Date(date).getTime()     
    return date;
}

//时间戳转为时间
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

// 补位函数，个位数前加0
function formatNumber (n) {
    n = n.toString()
    return n[1] ? n : '0' + n;
}