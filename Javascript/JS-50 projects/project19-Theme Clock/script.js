const toggle=document.querySelector('.toggle');
const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const secondEl=document.querySelector('.second');
const timeEl=document.querySelector('.time');
const dateEl=document.querySelector('.date');

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]

toggle.addEventListener('click',()=>{
    // alert("hi")
const html=document.querySelector("html");
if(html.classList.contains('dark')){
    html.classList.remove('dark');
    toggle.innerHTML="Dark mode"
}else{
    html.classList.add('dark');
    toggle.innerHTML="Light mode"
}
})

function setTime(){
    const time=new Date();
    const month=time.getMonth();
    const day=time.getDay();
    const date=time.getDate();
    const Hours=time.getHours();
    const HoursForClock=Hours%12;
    const minute=time.getMinutes();
    const seconds=time.getSeconds()
    const ampm=Hours>=12 ? "AM" :"PM";

    hourEl.style.transform=`translate(-50%, -100%) rotate(${scale(HoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform=`translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    secondEl.style.transform=`translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
    
    timeEl.innerHTML=`${HoursForClock}:${minute < 10 ?`0${minute}` : minute} ${ampm}`
    dateEl.innerHTML=`${days[day]},${months[month]}<span class="circle">${date}</span>`
}

    /*map a range of numbers to another range of numbers*/

    const scale=(num,in_min,in_max,out_min,out_max)=>{
        return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
    


setTime();
setInterval(setTime,1000)