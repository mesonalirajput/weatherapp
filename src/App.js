// import React, {Component} from 'react';

// class FavGames extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {selectedsport: ''};
//   }
//   _Selectsport = (sport) => {
//     this.setState({selectedsport: sport});
//   };
//   render() {
//     return (
//       <div>
//         <div>{this.state.selectedsport}</div>
//         <Sport sport={'Cricket'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Hockey'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Wrestling'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Swimming'} selectsport={this._Selectsport}></Sport>
//       </div>
//     );
//   }
// }
// class Sport extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.props.selectsport(this.props.sport);
//           }}>
//           {this.props.sport}
//         </button>
//       </div>
//     );
//   }
// }
// export default FavGames;

// _____________________________________________________________________________________________

// import React, {Component} from 'react';

// class FavGames extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {selectedsport: ''};
//   }
//   _Selectsport = (sport) => {
//     this.setState({selectedsport: sport});
//   };
//   render() {
//     return (
//       <div>
//         <div>{this.state.selectedsport}</div>
//         <Sport sport={'Cricket'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Hockey'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Wrestling'} selectsport={this._Selectsport}></Sport>
//         <Sport sport={'Swimming'} selectsport={this._Selectsport}></Sport>
//       </div>
//     );
//   }
// }
// class Sport extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.props.selectsport(this.props.sport);
//           }}>
//           {this.props.sport}
//         </button>
//       </div>
//     );
//   }
// }
// export default FavGames;

// _____________________________________________________________________________________________

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
  TiWeatherWindy,
} from 'react-icons/ti';
import {BiSearchAlt} from 'react-icons/bi';
import {HiArrowNarrowUp, HiArrowNarrowDown} from 'react-icons/hi';
const API_URL =
  'https://api.openweathermap.org/data/2.5/onecall?lat=30.3833&lon=75.55&appid=542ffd081e67f4512b705f89d2a611b2&exclude=minutely,hourly';
var daysFull = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let Icons = {
  Clouds: TiWeatherCloudy,
  Clear: TiWeatherSunny,
  Rain: TiWeatherShower,
  Mist: TiWeatherWindyCloudy,
  Haze: TiWeatherWindy,
};
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {CityInput: ''};
  }

  _onCityChange = (e) => {
    this.setState({CityInput: e.target.value});
  };
  _onSearch = (e) => {
    let {CityInput} = this.state;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CityInput}&appid=6ec7b2ca4d992da292242111ffeddc78`,
    )
      .then((response) => response.json())
      .then((res) => {
        let dat = {
          city: res.name,
          lat: res.coord.lat,
          lon: res.coord.lon,
        };
        this.props._getWeather(dat);
      });
    e.preventDefault();
    return false;
  };
  render() {
    let {wData} = this.props;
    if (!wData) {
      return null;
    }
    let current = wData.current;
    let dt = new Date(parseInt(current.dt) * 1000);
    let Currenticon = Icons[current.weather[0].main];
    let daily = wData.daily;
    let RenderDays = daily.map((data) => <Day data={data} />);
    let today = daily[0];
    return (
      <div className={'Fullpage'}>
        <div className={'UpperBox'}>
          <div className={'LeftUprBox'}>
            <form className={'SearchContainer'} onSubmit={this._onSearch}>
              <input
                className={'SearchInput'}
                type="text"
                placeholder="Search"
                onChange={this._onCityChange}
                value={this.state.CityInput}
                name="search"></input>
              <button
                className={'SearchBtn'}
                type="submit"
                onClick={this._onSearch}>
                <BiSearchAlt color={'black'} size={34} />
              </button>
            </form>
            <div className={'Name'}>{this.props.cityName}</div>
            <div className={'Day'}>{daysFull[dt.getDay()]}</div>
            <div className={'Date'}>{dt.toDateString().substring(3)}</div>
            <div className={'Wind'}>Wind {current.wind_speed}Km/h</div>
          </div>
          <div className={'UpperIcon'}>
            <Currenticon color={'#ffffff'} size={300} />
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
}
var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
function Day(props) {
  let {data} = props;
  let dt = new Date(data.dt * 1000);
  let Icon = Icons[data.weather[0].main];
  // console.log(data.weather[0].main, Icon);
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
    this.state = {wData: '', cityName: ''};
  }
  componentDidMount() {
    // let nd = new Date(1613629800 * 1000);
    // console.log(nd.getUTCDay());
    this._getWeather();
  }
  _getWeather = (dat) => {
    if (!dat) {
      dat = {
        city: 'Barnala',
        lat: 30.3833,
        lon: 75.55,
      };
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${dat.lat}&lon=${dat.lon}&appid=542ffd081e67f4512b705f89d2a611b2&exclude=minutely,hourly`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({wData: data, cityName: dat.city});
        // console.log(dat, data);
      })
      .catch((err) => console.log('error fetching data!: ', err));
  };
  render() {
    return (
      <MainPage
        wData={this.state.wData}
        _getWeather={this._getWeather}
        cityName={this.state.cityName}
      />
    );
  }
}
export default WeatherWebApp;
