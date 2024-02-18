var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#city output')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik='989d2c23c9c11a187b48f0a4d3919255'
function convertor(val)
{
	return(val-273).tofixed(3)
}
btn.addEventListener('click',function(){
	fetch('https://api.openweathermap.org/data/3.0/onecall?q='+inputvalue.value+'&appid'+apik)
	.then(res => res.json())
	
	.then(data
	{
		var nameval=data['name']
		var descrip=data['weather']['0']['description']
		var temprature=data['main']['temp']
		var windspeed=data['wind']['speed']
		
		city.innerHTML='Weather of span>${nameval}<span>'
		temp.innerHTML='Temprature <span>${convertion{temprature}}C</span>'
		description.innerHTML='Wind Speed:<span>${wndspeed}km/h<span>'
		
	})

..catch(err => alert('You entered wrong name'))
})
	