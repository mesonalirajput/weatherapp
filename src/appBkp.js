import React from 'react';
import './App.css';

// class App extends Component {
//   state = {
//     value: '',
//   };
//   handlechange = (e) => {
//     this.setState({value: e.target.value.toUpperCase().substr(0, 10)});
//     console.log(e.target.value);
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <h1>Type your name</h1>
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handlechange}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
// _________________________________________________________________________________

// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handlechange = this.handlechange.bind(this);
//     this.handlesubmit = this.handlesubmit.bind(this);
//   }

//   handlechange(event) {
//     this.setState({value: event.target.value});
//   }

//   // handlesubmit(event) {
//   //   alert('A name was submitted:' + this.state.value);
//   //   event.preventDefault();
//   // }
//   handlesubmit(event) {
//     alert('your favourite flavor is ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handlesubmit}>
//           {/* <label>
//             Name:
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handlechange}
//             />
//           </label> */}
//           {/* <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handlechange} />
//           </label> */}
//           <label>
//             What is your favourite flavor?
//             <select value={this.state.value} onChange={this.handlechange}>
//               <option value="chocolate">Chocolate</option>
//               <option value="vanila">vanila</option>
//               <option value="grapes">grapes</option>
//               <option value="mango">mango</option>
//             </select>
//           </label>
//           <input type="Submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

// ________________________________________________________________________________________

// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       IsGoing: true,
//       NumberofGuests: 2,
//     };
//     this.handlechange = this.handlechange.bind(this);
//   }
//   handlechange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     console.log(name, value);

//     this.setState({
//       [name]: value,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             IsGoing:
//             <input
//               type="checkbox"
//               name="IsGoing"
//               checked={this.state.IsGoing}
//               onChange={this.handlechange}
//             />
//           </label>
//           <br />
//           <label>
//             Number of Guests:
//             <input
//               type="number"
//               name="NumberofGuests"
//               value={this.state.NumberofGuests}
//               onChange={this.handlechange}
//             />
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;

// ____________________________________________________________________

// import React, {Component} from 'react';
// function BoilingVerdict(props) {
//   if (props.celcius > 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {temperature: ''};
//   }
//   handlechange = (e) => {
//     this.setState({temperature: e.target.value});
//   };
//   render() {
//     const temperature = this.state.temperature;
//     return (
//       <div>
//         <fieldset>
//           <legend>Enter the temperature in celcius: </legend>
//           <input value={temperature} onChange={this.handlechange} />
//           <BoilingVerdict celcius={parseFloat(temperature)} />
//         </fieldset>
//       </div>
//     );
//   }
// }

// export default App;

// ________________________________________________________________________

// import React, {Component} from 'react';

// const scaleNames = {
//   c: 'celcius',
//   f: 'Farenheit',
// };
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {temperature: ''};
//   }
//   handlechage = (e) => {
//     this.setState({temperature: e.target.value});
//   };
//   render() {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature} onChange={this.handlechage} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends Component {
//   render() {
//     return (
//       <div>
//         <App scale="c" />
//         <App scale="f" />
//       </div>
//     );
//   }
// }

// export default Calculator;

// ______________________________________________________________________________________

// import React, {Component} from 'react';

// class Calculator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {scale: 'c', temp: 0};
//   }

//   handleCelcius = (e) => {
//     this.setState({scale: 'c', temp: e.target.value});
//   };

//   handleFahrenheit = (e) => {
//     this.setState({scale: 'f', temp: e.target.value});
//   };

//   render() {
//     const temp = this.state.temp;
//     const scale = this.state.scale;
//     const celcius = scale === 'f' ? convert(temp, toCelcius) : temp;
//     const fahrenheit = scale === 'c' ? convert(temp, toFahrenheit) : temp;
//     return (
//       <div>
//         <App scalename="Celsius" value={celcius} func={this.handleCelcius} />
//         <App
//           scalename="Fahrenheit"
//           value={fahrenheit}
//           func={this.handleFahrenheit}
//         />
//       </div>
//     );
//   }
// }
// function convert(temp, convertfunction) {
//   return convertfunction(temp);
// }
// function toCelcius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }
// function toFahrenheit(celcius) {
//   return (celcius * 9) / 5 + 32;
// }

// class App extends Component {
//   render() {
//     return (
//       <fieldset>
//         <legend>Scale this.props.scaleNames</legend>
//         <input value={this.props.value} onChange={this.props.func} />
//       </fieldset>
//     );
//   }
// }

// export default Calculator;

// _______________________________________________________________________________

// function Contacts() {
//   return <div className="Contacts" />;
// }
// function Chats() {
//   return <div className="Chats" />;
// }
// function SplitPlane(props) {
//   return (
//     <div className="SplitPlane">
//       <div className="SplitPlane-left">{props.left}</div>                               INKI CSS CODE NHI LIKHI HUI H
//       <div className="SplitPlane-right">{props.right}</div>
//     </div>
//   );
// }

// function App() {
//   return <SplitPlane left={<Contacts />} right={<Chats />} />;
// }
// ReactDOM.render(<App />, document.elementFromPoint('root'));

// _______________________________________________________________________________________

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-tittle">{props.tittle}</h1>
//       <p className="Dialog-message">{props.message}</p>                            INKI CSS CODE NHI LIKHI HUI H
//     </FancyBorder>
//   );
// }
// function WelcomeDialog(props) {
//   return (
//     <Dialog tittle="Welcome" message="Start learning React from today!!" />
//   );
// }
// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));

// _____________________________________________________________________________________________

// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder fancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">{props.title}</h1>
//       <p className="Dialog-message">{props.message}</p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// class SignupDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {login: ''};
//     this.handleonchange = this.handleonchange.bind(this);
//     this.handleonclick = this.handleonclick.bind(this);
//   }
//   render() {
//     return (
//       <div>
//         <Dialog
//           title="Welcome to Mars!!"
//           message="Register yourself to have trip on mars.">
//           <input value={this.state.login} onChange={this.handleonchange} />
//           <button onClick={this.handleonclick}>Sign Up!</button>
//         </Dialog>
//       </div>
//     );
//   }
//   handleonchange = (e) => {
//     this.setState({login: e.target.value});
//   };
//   handleonclick = (e) => {
//     alert(`Registration Successfull ${this.state.login}!`);
//   };
// }
// // ReactDOM.render(<SignupDialog />, document.getElementById('root'));
// export default SignupDialog;

___________________________________________________________________________;
// import ReactPlayer from 'react-player';

// import React, {Component} from 'react';
// import vid from './assets/vid.mp4';

// class App extends Component {
//   componentDidMount() {
//     // console.log(this.video);
//   }
//   _play = (e) => {
//     this.video.play();
//   };
//   _pause = (e) => {
//     this.video.pause();
//   };
//   _forward = (e) => {
//     let currentTime = this.video.currentTime;
//     this.video.currentTime = currentTime + 10;
//   };
//   render() {
//     return (
//       <div>
//         {/* <video
//           ref={(r) => (this.video = r)}
//           src={vid}
//           style={{width: 500, height: 300}}></video>
//         <button onClick={this._play}> Play</button>
//         <button onClick={this._pause}> Pause</button>
//         <button onClick={this._forward}> Forward</button> */}
//         <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
//       </div>
//     );
//   }
// }

// export default App;
