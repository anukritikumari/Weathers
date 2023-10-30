var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add'); 
var city = document.querySelector('#cityinput')
var descrip = document.querySelector('#discription')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik="033c9ad6fd436cc73b46a50c30fd3e48"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature =data['main']['temp']
            var windspeed =data['wind']['speed']

            city.innerHTML=`Weather of <span>${nameval}<spam>`
            temp.innerHTML=`Temperture: <span>${ convertion(tempature)} C</spam>`
            description.innerHTML=`Sky Conditions: <span>${descrip}<spam>`
            wind.innerHTML=`Wind Speed: <span>${windspeed} km/h<spam>`
    })
    .catch(err => alert('You entered Wrong city name'))
})
