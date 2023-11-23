

const newYear = new Date('12/31/2023');
const newYearTime = newYear.getTime()

// Time values
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let interval;

// Time display 
const daysElement = document.querySelector('.daysBox')
const hoursElement = document.querySelector('.hoursBox')
const minutesElement = document.querySelector('.minutesBox')
const secondsElement = document.querySelector('.secondsBox')




// Functions

function countDownFn() {

    let today = new Date ()
    let todayTime = today.getTime();
    let timeLeft = newYearTime - todayTime;
    console.log(timeLeft)

    if(timeLeft < 0){
        console.log('YAY')
        clearInterval(interval)
        document.querySelector('.countdown-timer').innerHTML = 'AUGURI!'
        return;

    }else{
        const days = Math.floor(timeLeft / day)
        const hours = Math.floor((timeLeft % day) / hour)
        const minutes = Math.floor((timeLeft % hour) / minute)
        const seconds = Math.floor((timeLeft % minute) / second)

        daysElement.innerHTML = days + 'days'
        hoursElement.innerHTML = hours + 'hours'
        minutesElement.innerHTML = minutes + 'minutes'
        secondsElement.innerHTML = seconds + 'seconds'
        
    
}}
interval = setInterval(countDownFn, 1000);
