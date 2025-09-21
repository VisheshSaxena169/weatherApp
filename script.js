// let BaseUrl='https://api.openweathermap.org/data/2.5/weather?q=Moradabad&APPID=8f65e03aa509235d36de0973035f40d4&units=metric'
let cityInput=document.querySelector("#cityInput");
const searchBtn=document.querySelector("#searchBtn");
const temperature=document.querySelector("#temperature")
const cityName=document.querySelector("#cityName")
const humidity=document.querySelector("#humidity");
const windSpeed=document.querySelector("#windSpeed");

searchBtn.addEventListener('click',async ()=>{
    let city=cityInput.value;
    city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
    console.log(city);
    let BaseUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=8f65e03aa509235d36de0973035f40d4&units=metric`
    console.log(BaseUrl);
    let response=await fetch(BaseUrl);
    let data= await response.json();

    
    temperature.innerHTML="Temperature : "+data.main.temp+"°C";
    cityName.innerHTML=city;
    humidity.innerHTML="Humidity:" +data.main.humidity+"%"
    
    windSpeed.innerHTML="Wind Speed:"+data.wind.speed+" kmph";
    console.log(data.wind.speed);

})

