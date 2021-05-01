import React, { Component } from "react";
import '../style/style.css';

import axios from 'axios'

import Haze from '../assets/images/weather/haze.jpg'
import Clear from '../assets/images/weather/clear.jpg'
import Clouds from '../assets/images/weather/clouds.jpg'

class ApiTesting extends Component {
  constructor(props){
    super(props);
    this.state={
      data: '',
      weatherMain: '',
      zip: '',
      country: '',
      myLat: '',
      myLon: '',
      temp: ''
    }
    this.getWeather = this.getWeather.bind(this);
    this.setData = this.setData.bind(this);
  }
  componentDidMount(){
     navigator.permissions.query({name:'geolocation'}).then(res=>{
       this.setState({
         locState: res.state
       })
       console.log(res.state);
     })
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          myLat: position.coords.latitude,
          myLon: position.coords.longitude
        });
        var req='http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
        req=req.replace(" ","");
        axios.get(req).then(res=>{
          this.setState({
            data: res.data,
            weatherMain: res.data.weather[0].main,
            temp: res.data.main
          })
        });
      }
    );
  }

  setData(evt){
    this.setState({ [evt.target.name]: evt.target.value });
  }
   getWeather(){
     var req='http://api.openweathermap.org/data/2.5/weather?zip='+this.state.zip+','+this.state.country+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
     req=req.replace(" ","");
     axios.get(req).then(res=>{
       console.log(res.data);
       this.setState({
         data: res.data,
         weatherMain: res.data.weather[0].main
       })
     });
     console.log(this.state.data.main.temp);
    }
  render() {
    return (
      <div>
        <input onChange={this.setData} placeholder="zip code" name="zip"/>
        <input onChange={this.setData} placeholder="country code" name="country"/>
        <button onClick={this.getWeather}>get weather</button>
        <h1>{this.state.weatherMain}</h1>
        <h1>{this.state.data.name}</h1>
        <h1>{this.state.temp.temp}</h1>
      </div>
    );
  }
}

export default ApiTesting;
