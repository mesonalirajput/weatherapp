import React from 'react';
import ReactDOM from 'react-dom';
// const user= ''
// //{
// //   firstname:'Sonali',
// //   lastname:'Rajput'
// // }
// function formatName(user){
//   return user.firstname+' '+user.lastname;
// }
// function getGreeting(user){
//   if (user){
//     return <h1>Hello, {formatName(user)}</h1>;
//   }
//   return <h1>Hello Stranger!</h1>
// }

// const element= <h1> {getGreeting(user)}</h1>;


// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
function tick() {
const element=(
  <div>
    <h1>Hello World!</h1>
    <h2>It is {new Date().toLocaleDateString()}.</h2>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);