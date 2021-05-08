import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faTemperatureHigh, faSearch, faCloudRain, faSmog, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Loading1 from '../components/loading';
import Footer from '../components/footer';

import Haze from '../assets/images/weather/haze.jpg'
import Clear from '../assets/images/weather/clear.jpg'
import Clouds from '../assets/images/weather/clouds.jpg'
import Rain from '../assets/images/weather/rain.jpg'
import Dust from '../assets/images/weather/dust.jpg'
import Mist from '../assets/images/weather/misty.JPG'
import Fog from '../assets/images/weather/fog.jpg'

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      data: '',
      weatherMain: '',
      zip: '',
      country: '',
      myLat: '',
      myLon: '',
      temp: '',
      sun: '',
      wind: '',
      clouds: '',
      inputVal: '',
      reqStatus: '',
      forecast: '',
      dates: [],
      days: []
    }
    this.getWeather2 = this.getWeather2.bind(this);
    this.getForecastcord = this.getForecastcord.bind(this);
    this.getForecastcity = this.getForecastcity.bind(this);
    this.getForecastPin = this.getForecastPin.bind(this);
    this.setData = this.setData.bind(this);
    this.load1 = this.load1.bind(this);
  }
  componentDidMount(){
    AOS.init({
      offset: 10,
      duration: 2000
    });
     navigator.permissions.query({name:'geolocation'}).then(res=>{
       this.setState({
         locState: res.state
       })
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
            weatherMain: res.data.weather[0],
            temp: res.data.main,
            myLat: res.data.coord.lat,
            myLon: res.data.coord.lon,
            sun: res.data.sys,
            wind: res.data.wind,
            clouds: res.data.clouds,
            reqStatus: res.status
          })
        });
        this.getForecastcord(position.coords.latitude,position.coords.longitude);
      }
    );
    setTimeout(this.load1,3000);
  }
  load1(){
      this.setState({
        isLoading: false
      });
  }
  setData(evt){
    this.setState({ [evt.target.name]: evt.target.value });
  }
   getForecastcord(x,y){
     var dates = [];
     var days = [];
     var fcData=[]
     var req='http://api.openweathermap.org/data/2.5/forecast?lat='+x+'&lon='+y+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
     req=req.replace(' ','');
     axios.get(req).then(res=>{
       for(var i=0;i<res.data.list.length;i++){
         if(dates.indexOf(res.data.list[i].dt_txt.split(' ')[0])<0){
           dates.push(res.data.list[i].dt_txt.split(' ')[0]);
           let date1 = res.data.list[i].dt_txt.split(' ')[0].split('-');
           var y=new Date(date1[0],date1[1]-1,date1[2]);
           days.push(y.toDateString().split(' ')[0]);
         }
       }
       this.setState({
         days: days,
         dates: dates
       })
       this.setState({
         forecast: res.data,
       })
     });
     console.log(req);
    }
   getForecastPin(x,y){
     var dates = [];
     var days = [];
     var fcData=[]
     var req='http://api.openweathermap.org/data/2.5/forecast?zip='+x+','+y+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
     req=req.replace(' ','');
     axios.get(req).then(res=>{
       for(var i=0;i<res.data.list.length;i++){
         if(dates.indexOf(res.data.list[i].dt_txt.split(' ')[0])<0){
           dates.push(res.data.list[i].dt_txt.split(' ')[0]);
           let date1 = res.data.list[i].dt_txt.split(' ')[0].split('-');
           var y=new Date(date1[0],date1[1]-1,date1[2]);
           days.push(y.toDateString().split(' ')[0]);
         }
       }
       this.setState({
         days: days,
         dates: dates
       })
       this.setState({
         forecast: res.data,
       })
     });
     console.log(req);
    }
   getForecastcity(x){
     var dates = [];
     var days = [];
     var fcData=[]
     var req='http://api.openweathermap.org/data/2.5/forecast?q='+x+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
     req=req.replace(' ','');
     axios.get(req).then(res=>{
       for(var i=0;i<res.data.list.length;i++){
         if(dates.indexOf(res.data.list[i].dt_txt.split(' ')[0])<0){
           dates.push(res.data.list[i].dt_txt.split(' ')[0]);
           let date1 = res.data.list[i].dt_txt.split(' ')[0].split('-');
           var y=new Date(date1[0],date1[1]-1,date1[2]);
           days.push(y.toDateString().split(' ')[0]);
         }
       }
       this.setState({
         days: days,
         dates: dates
       })
       this.setState({
         forecast: res.data,
       })
     });
     console.log(req);
    }
   getWeather2(){
     var  inputVal = this.state.inputVal;
     var req='';
     if(Number(inputVal)){
       req='http://api.openweathermap.org/data/2.5/weather?zip='+inputVal+',IN&appid=ee09cabd0c0770e88fd6cd931143eeca';
       this.getForecastPin(inputVal,'IN');
     }
     else if(inputVal.indexOf(',')>-1){
       var ary = inputVal.split(',');
       if(Number(ary[0]) && Number(ary[1]) ){
         req='http://api.openweathermap.org/data/2.5/weather?lat='+ary[0]+'&lon='+ary[1]+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
         this.getForecastcord(ary[0],ary[1]);
       }
       else if(Number(ary[0]) && !Number(ary[1])){
         req='http://api.openweathermap.org/data/2.5/weather?zip='+ary[0]+','+ary[1]+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
         this.getForecastPin(ary[0],ary[1]);
       }
     }
     else{
       req='http://api.openweathermap.org/data/2.5/weather?q='+inputVal+'&appid=ee09cabd0c0770e88fd6cd931143eeca';
       this.getForecastcity(inputVal);
     }
     req=req.replace(" ","");
     axios.get(req).then(res=>{
       this.setState({
         data: res.data,
         weatherMain: res.data.weather[0],
         temp: res.data.main,
         myLat: res.data.coord.lat,
         myLon: res.data.coord.lon,
         sun: res.data.sys,
         wind: res.data.wind,
         clouds: res.data.clouds,
         reqStatus: res.data.cod,
         isLoading: true
       })

     }).catch(error => {
      console.log(error);
      window.location.href+="error";
    });
    setTimeout(this.load1,2000);
    }
  render() {
    return (
      <section>
        {!this.state.isLoading &&
          <Container fluid>
            <Row noGutters>
              <Col md={8}>
                <div className="weather-disp">
                  <div className="title">
                  <Row>
                    <Col xs={10}>
                        <h1>Weatherog</h1>
                    </Col>
                    <Col xs={2}>
                        <a href="https://github.com/yunghog/weather-og" target="_blank" rel="noreferrer">
                          <h1>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                          </h1>
                        </a>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <Row data-aos="fade-up">
                  <Col md={{ span: 8, offset: 2 }} >
                    <div className="data-form">
                      <div className="form-ctrl">
                        <input onChange={this.setData} placeholder="Search <cityname> or <zip,cc> or <lat,lon>" name="inputVal"/>
                        <button className="btn btn-search" onClick={this.getWeather2}>
                          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
                  <div className="weather-disp-data-con">
                    <div className="weather-disp-data">
                      <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                          <div className="temp-con" data-aos="fade-right">
                            <div className="temp">
                              <h2>
                                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> {this.state.data.name}
                              </h2>
                                <div className="temp-sub">
                                  <span>
                                    Lat
                                    <p>
                                      {this.state.myLat}
                                    </p>
                                  </span>
                                </div>
                                <div className="temp-sub">
                                  <span>
                                    Lon
                                    <p>
                                      {this.state.myLon}
                                    </p>
                                  </span>
                                </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{ span: 4, offset: 2 }}>
                          <div className="temp-con"  data-aos="fade-right" data-aos-delay="250">
                            <div className="temp">
                              <h2>
                                <FontAwesomeIcon icon={faTemperatureHigh}></FontAwesomeIcon>  {(this.state.temp.temp-273.0).toFixed(2)}&#176; C
                              </h2>
                              <div className="temp-sub">
                                <span>
                                  MIN
                                  <p>
                                    {(this.state.temp.temp_min-273.0).toFixed(2)}&#176;C
                                  </p>
                                </span>
                                <span>
                                  MAX
                                  <p>
                                    {(this.state.temp.temp_max-273).toFixed(2)}&#176;C
                                  </p>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="temp-con"   data-aos="fade-right" data-aos-delay="500">
                            <div className="temp">
                              <h2>
                                  {this.state.weatherMain.main=="Clouds" && <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Clear" && <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Rain" && <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Dust" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Haze" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Mist" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                  {this.state.weatherMain.main=="Fog" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                  &nbsp;{this.state.weatherMain.main}
                              </h2>
                                <div className="temp-sub">
                                  <span>
                                    Description
                                    <p>
                                      {this.state.weatherMain.description}
                                    </p>
                                  </span>
                                </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{span:4,offset:2}}>
                          <div className="temp-con">
                            <div className="temp">
                              <h3>Humidity : {this.state.temp.humidity} %</h3>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="temp-con">
                            <div className="temp">
                              <h3>Pressure : {this.state.temp.pressure} mBar</h3>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={{span:8, offset:2}}>
                          <div className="forecast-con">
                            {
                              this.state.dates.map((i) => (
                                <div className="forecast-data" data-aos="fade-up">
                                    <h1>{this.state.days[this.state.dates.indexOf(i)]}</h1>
                                    {this.state.forecast.list.map((j) => {
                                      if(i==j.dt_txt.split(' ')[0]){
                                        return(
                                          <div>
                                            <span className="time">
                                              {j.dt_txt.split(' ')[1].split(':')[0]}:{j.dt_txt.split(' ')[1].split(':')[1]} Hours
                                            </span>
                                            <span className="weather1">
                                              {j.weather[0].description}&nbsp;&nbsp;
                                              {j.weather[0].main=="Clouds" && <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Clear" && <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Haze" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Rain" && <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Fog" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Mist" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                              {j.weather[0].main=="Dust" && <FontAwesomeIcon icon={faSmog}></FontAwesomeIcon>}
                                            </span>
                                            <span className="temp1">
                                              {(j.main.temp-273).toFixed(0)}&#176; C
                                            </span>
                                          </div>
                                        )
                                      }
                                    })}
                                </div>
                              ))
                            }
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="weather-disp-image weather-disp-image-fixed">
                    {this.state.weatherMain.main=="Clouds" && <img src={Clouds}></img>}
                    {this.state.weatherMain.main=="Clear" && <img src={Clear}></img>}
                    {this.state.weatherMain.main=="Haze" && <img src={Haze}></img>}
                    {this.state.weatherMain.main=="Rain" && <img src={Rain}></img>}
                    {this.state.weatherMain.main=="Mist" && <img src={Mist}></img>}
                    {this.state.weatherMain.main=="Dust" && <img src={Dust}></img>}
                    {this.state.weatherMain.main=="Fog" && <img src={Fog}></img>}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="data-con">
                  <div className="data">
                    <div className="data-form">
                      <h2>Get Weather : </h2>
                      <div className="form-ctrl" data-aos="fade-left">
                        <input onChange={this.setData} placeholder="Search" name="inputVal"/>
                        <button className="btn btn-search" onClick={this.getWeather2}>
                          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                      </div>
                    </div>
                    <br/>
                    <div className="data-info" data-aos="fade-left" data-aos-delay="200">
                      <span>
                        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                      </span>
                      <h3>Get weather by</h3>
                      <ul>
                        <li>Zip code and CC. eg: 577401,IN</li>
                        <li>Geographical Coordinates. eg: 12.9794,77.5946</li>
                        <li>City Name. eg: Atlanta</li>
                      </ul>
                    </div>
                    <br/>
                    <h2>Weather Details</h2>
                    <div className="data-list" data-aos="fade">
                      <ul>
                        <li>
                          <div className="data-atr">Humidity</div>
                          <div className="data-val">{this.state.temp.humidity}%</div>
                        </li>
                        <li>
                          <div className="data-atr">Pressure</div>
                          <div className="data-val">{this.state.temp.pressure} mBar</div>
                        </li>
                        <li>
                          <div className="data-atr">Cloud Density</div>
                          <div className="data-val">{this.state.clouds.all}%</div>
                        </li>
                        <li>
                          <div className="data-atr">Wind Speed</div>
                          <div className="data-val">{this.state.wind.speed} m/s</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="weather-disp-image blur">
                    {this.state.weatherMain.main=="Clouds" && <img src={Clouds}></img>}
                    {this.state.weatherMain.main=="Clear" && <img src={Clear}></img>}
                    {this.state.weatherMain.main=="Haze" && <img src={Haze}></img>}
                    {this.state.weatherMain.main=="Rain" && <img src={Rain}></img>}
                    {this.state.weatherMain.main=="Mist" && <img src={Mist}></img>}
                    {this.state.weatherMain.main=="Dust" && <img src={Dust}></img>}
                    {this.state.weatherMain.main=="Fog" && <img src={Fog}></img>}
                  </div>
                  <Footer/>
                </div>
              </Col>
            </Row>
          </Container>
        }
        {
          this.state.isLoading &&
          <Loading1/>
        }
      </section>
    );
  }
}

export default Home;
