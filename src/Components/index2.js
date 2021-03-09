import React from 'react';
import ReactDOM from 'react-dom';


// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }
// const element=<Welcome name='Sonali'/>
// ReactDOM.render(
//   element, document.getElementById('root')
// );

// __________________________________________________________________

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }
// function App(){
// return (
//   <div>
//     <Welcome name="Sonali"/>
//     <Welcome name="Muskan"/>
//     <Welcome name="Palak"/>

//   </div>
//   );
// }
// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// _________________________________________________________________________


// import React from 'react';
// import ReactDOM from 'react-dom';
// function formatDate(date) {
//    return date.toLocaleDateString();
// }
// function Comment(props) {
//     return(
//     <div className="Comment">
//     <div className="Userinfo">
//     <img className="Avatar"
//     src={props.author.avatarUrl}
//     alt={props.author.name}
//     />
//     <div className="Userinfo-name">
//     {props.author.name}
//     </div>
//     </div>
// <div className="comment-text">{props.text}</div>
// <div className="comment-date">{formatDate(props.date)}</div>
//  </div>
//    );
// }
// const comment={
//     date:new Date(),
//     text:'Hope u are enjoying React!',
//     author:{
//         name:'Hello kitty',
//         avatarUrl:'https://st2.depositphotos.com/2021695/7175/i/600/depositphotos_71755965-stock-photo-hello-kitty.jpg ',
//     },
// };
// ReactDOM.render(
//     <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//     />,
//     document.getElementById('root')
// );