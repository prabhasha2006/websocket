
//* battery level reading
var chargeAnimate = 0
setInterval(() => {
  
var battery_percentage = document.getElementsByClassName('battery-persentage')[0]
var battery_bar = document.getElementsByClassName('battery-persentage-1')[0]
var battery_image = document.getElementsByClassName('battery-image')[0]

navigator.getBattery().then((battery) => {

    var batterylevel = battery.level * 100;
    var batterylevelstate = 4
    var batterylow = ""

    batterylevel = Math.ceil(batterylevel) // 56.99999999 = 56 / ammo loku deyak
    battery_percentage.innerHTML = batterylevel+"%"
    var ischarge = ""
    if(battery.charging){
        battery_percentage.innerHTML = batterylevel+"<i class='fa fa-plug'></i>"
        battery_bar.innerHTML = "Charge"
        battery_image.style.backgroundImage = "linear-gradient(rgb(0, 195, 255), rgb(0, 183, 255))"
        return
    }

    if(batterylevel == 100){
        battery_percentage.innerHTML = batterylevel+"%"
        battery_bar.innerHTML = "Full"
        battery_image.style.backgroundImage = "linear-gradient(rgb(0, 255, 0), rgb(0, 255, 0))"
        return
    }
    if(batterylevel >= 80){
        battery_percentage.innerHTML = batterylevel+"%"
        battery_bar.innerHTML = "Good"
        battery_image.style.backgroundImage = "linear-gradient(rgb(0, 255, 0), rgb(166, 255, 0))"
        return
    }
    if(batterylevel >= 50){
        battery_percentage.innerHTML = batterylevel+"%"
        battery_bar.innerHTML = "Normal"
        battery_image.style.backgroundImage = "linear-gradient(rgb(238, 255, 0), rgb(255, 187, 0))"
        return
    }
    if(batterylevel >= 10){
        battery_percentage.innerHTML = batterylevel+"<i class='fa fa-leaf'></i>"
        battery_bar.innerHTML = "Low"
        battery_image.style.backgroundImage = "linear-gradient(rgb(222, 200, 0), rgb(255, 0, 0))"
        return
    }
    if(batterylevel >= 5){
        battery_percentage.innerHTML = batterylevel+"%"
        battery_bar.innerHTML = "Lower"
        battery_image.style.backgroundImage = "linear-gradient(rgb(255, 100, 0), rgb(255, 0, 0))"
    }
  //console.log("BATTERY READING: "+batterylevel);
});

},1000)