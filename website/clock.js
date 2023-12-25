const n2 = (digit) => {
    if(digit < 10){
        return "0"+digit
    }else{
        return digit
    }
}
const mm = (month) => {
    switch(month){
        case 0 :{
            return 'January'
        }break
        case 1 :{
            return 'February'
        }break
        case 2 :{
            return 'March'
        }break
        case 3 :{
            return 'April'
        }break
        case 4 :{
            return 'May'
        }break
        case 5 :{
            return 'June'
        }break
        case 6 :{
            return 'July'
        }break
        case 7 :{
            return 'August'
        }break
        case 8 :{
            return 'September'
        }break
        case 9 :{
            return 'October'
        }break
        case 10 :{
            return 'November'
        }break
        case 11 :{
            return 'December'
        }break
    }
}
const timeLine = document.getElementById('timeline')
const monthLine = document.getElementById("month")
setInterval(()=>{
    var hour = 0
    var minut = 0
    var second = 0
    var month = 0
    var d = new Date()
    hour = d.getHours()
    minut = d.getMinutes()
    second = d.getSeconds()
    month = d.getMonth()
    timeLine.innerHTML = `<h2>${n2(hour)}:${n2(minut)}</h2><h3>:${n2(second)}</h3>`
    monthLine.innerHTML = mm(month)
},1000)