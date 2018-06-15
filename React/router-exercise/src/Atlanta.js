import React, { Component } from 'react';
import $ from 'jquery'; 

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				icon:[weatherData.weather[0].icon],
				temp:weatherData.main.temp,
				temp_min:weatherData.main.temp_min,
				temp_max:weatherData.main.temp_max,
				desc:[weatherData.weather[0].description,weatherData.weather[1].description]

			})
		});
	}

	render(){
		return(
			<div>
				<h1>Real-time Atlanta Weather!</h1>
				<p>The temperature is: {this.state.temp} {this.state.icon[0]}</p>
				<p>The min temperature is: {this.state.temp_min}</p>
				<p>The max temperature is: {this.state.temp_max}</p>
				<p>The decription of the temperature is: {this.state.desc[0]}, {this.state.desc[1]}</p>
			</div>
		);
	}
}

export default Weather;
