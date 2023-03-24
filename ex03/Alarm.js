let alarmTime;
let isAlarmSet=false;
let currenttime;
let currentTimeInterval;
let hour;
let minute;
let timeString;

function setAlarm(){
    alarmTime=document.getElementById("time").value;
    isAlarmSet= true;
     if(isAlarmSet){
        currentTimeInterval= setInterval(()=>{
            currenttime=new Date();
            hour=('0'+currenttime.getHours()).slice(-2);
            minute=('0'+currenttime.getMinutes()).slice(-2);
            timeString=hour + ':' + minute;
    
        if(alarmTime==timeString){
                alert("알람시간입니다:)");
                setTimeout(() => {
                    clearInterval(currentTimeInterval);
                }, 60000);
            }
        },1000);
    }
}
