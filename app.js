const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');

const items = document.querySelectorAll(".deadline h4");

let futureDate =new Date(2021, 9, 24 ,15, 30, 00);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();


let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


giveway.textContent = `Giveway Ends on ${weekday} ${date} ${month}, ${year}.  (${hours}:${minute} PM)`;

const futureTime = futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

   


    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay)/oneHour);
    let minutes = Math.floor((t% oneHour)/oneMinute);
    let seconds = Math.floor((t% oneMinute)/1000);
    


    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item<10){
            return item =`0${item}`
        }
    return item;

    }


    items.forEach(function(item,index){
        item.innerHTML =format(values[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, This Giveway Has Expired.</h4>`
    };



}


let countdown = setInterval(getRemainingTime,1000);


getRemainingTime();