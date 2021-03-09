import React, {Component} from 'react';
import './App.css';
import {
  TiWeatherCloudy,
  TiWeatherSnow,
  TiWeatherSunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherWindyCloudy,
  TiWeatherPartlySunny,
} from 'react-icons/ti';
import {HiArrowNarrowUp, HiArrowNarrowDown} from 'react-icons/hi';

const API_URL =
  'https://api.openweathermap.org/data/2.5/onecall?lat=30.3833&lon=75.55&appid=542ffd081e67f4512b705f89d2a611b2&exclude=minutely,hourly';
let Icons = {
  Clear: TiWeatherSunny,
  Clouds: TiWeatherCloudy,
  Rain: TiWeatherShower,
  Mist: TiWeatherWindyCloudy,
};

var daysFull = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
function MainPage(props) {
  let {wData} = props;
  if (!wData) {
    return null;
  }

  let current = wData.current;
  let dt = new Date(parseInt(current.dt) * 1000);
  let CurrentIcon = Icons[current.weather[0].main];

  let daily = wData.daily;

  let RenderDays = daily.map((data) => <Day data={data} />);
  let today = daily[0];
  return (
    <div className={'Fullpage'}>
      <div className={'UpperBox'}>
        <div className={'LeftUprBox'}>
          <div className={'Name'}>BARNALA,PUNJAB</div>
          <div className={'Day'}>{daysFull[dt.getDay()]}</div>
          <div className={'Date'}>{dt.toDateString()}</div>
          <div className={'Wind'}>Wind {current.wind_speed}Km/h</div>
        </div>
        <div className={'UpperIcon'}>
          <CurrentIcon color={'#ffffff'} size={300} />
          {current.weather[0].main}
        </div>
        <div className={'tempFull'}>
          <div className={'tempsCon'}>
            <div className={'inTempCon'}>
              <HiArrowNarrowDown color={'#ffffff'} size={50} />
              <div className={'temp'}>
                {Math.round(parseInt(today.temp.min) - 273.15)}°
              </div>
            </div>
            <div className={'inTempCon'}>
              <HiArrowNarrowUp color={'#ffffff'} size={50} />
              <div className={'temp'}>
                {Math.round(parseInt(today.temp.max) - 273.15)}°
              </div>
            </div>
          </div>

          <div className={'CurrentTemp'}>
            {Math.round(parseInt(current.temp) - 273.15)}°
          </div>
        </div>
      </div>
      <div className={'LowerBox'}>
        <div className={'DaysCon'}>{RenderDays}</div>
      </div>
    </div>
  );
}

let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
function Day(props) {
  let {data} = props;
  let dt = new Date(data.dt * 1000);
  let Icon = Icons[data.weather[0].main];
  return (
    <div className={'wBox'}>
      <div>{days[dt.getUTCDay()]}</div>
      <Icon color={'#ffffff'} size={127} />
      <div>{Math.round(parseInt(data.temp.day) - 273.15)}°</div>
    </div>
  );
}
class WeatherWebApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wData: '',
    };
  }

  componentDidMount() {
    // let nd = new Date(1613629800 * 1000);
    // console.log(nd.getUTCDay());
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({wData: data});
      })
      .catch((err) => console.log('error fetching data!: ', err));
  }

  render() {
    return <MainPage wData={this.state.wData} />;
  }
}

export default WeatherWebApp;
