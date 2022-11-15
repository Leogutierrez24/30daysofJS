const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const days = document.querySelector('.day');
const months = document.querySelector('.month');
const years = document.querySelector('.year');
const weekDays = document.querySelector('.weekDay');
const temperature = document.querySelector('.temp');

function getWeekDay(dayNumber){
    switch(dayNumber){
        case 0:
            return "sun";
            break;
        case 1:
            return "mon";
            break;
        case 2:
            return "tue";
            break;
        case 3:
            return "wed";
            break;
        case 4:
            return "thu";
            break;
        case 5:
            return "fry";
            break;
        case 6:
            return "sat";
            break;
        default:
            return "error";
    }
}

function getActualTime(){
    const now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds(),
    day = now.getDate(),
    month = now.getMonth(),
    year = now.getFullYear(),
    weekDay = now.getDay();

    hours.innerText = `${(hour < 10) ? "0" + hour : hour}`;
    minutes.innerText = `${(minute < 10) ? "0" + minute : minute}`;
    seconds.innerText = `${(second < 10) ? "0" + second : second}`;
    days.innerText = `${day}`;
    months.innerText = `${month}`;
    years.innerText = `${year}`;
    weekDays.innerText = `${getWeekDay(weekDay)}`;
    
}

const getWeather = async() => {
    let actualWeather;
    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.6118&longitude=-58.4173&hourly=temperature_2m&current_weather=true");
    const data = await response.json();
    actualWeather = data.current_weather.temperature;
    temperature.innerText = `${Math.trunc(actualWeather)}°C`;
}

getWeather();
setInterval(getActualTime, 1000);