function getTime(){
    
let date  = new Date();
let hour = date.getHours().toString().padStart(2,'0');
let minutes = date.getMinutes().toString().padStart(2,'0')
let seconds =date.getSeconds().toString().padStart(2,'0')
//HH:MM::SS (Eg. 13:45:23)
console.log(`${hour}:${minutes}:${seconds}`);

//HH:MM::SS AM/PM (Eg 01:45:23 PM)
let hour12 = hour
let period = "AM";
if(hour12>=12){
    period = "PM";
    hour12 = (hour12 == 12)? 12 : (hour - 12);
}
hour12 = hour12.toString().padStart(2,'0');
console.log(`${hour12}:${minutes}:${seconds} ${period}`);
}
setInterval(getTime, 1000);