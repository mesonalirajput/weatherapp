
// import React from 'react';
// import ReactDOM from 'react-dom';
// class Toggle extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={istoggleon:true};

//         this.handleclick=this.handleclick.bind(this);
//     }
//     handleclick(){
//         this.setState(
//             prevstate=>({
//                 istoggleon: !prevstate.istoggleon
//             }));
//     }
//     render(){
//         return(
//             <button onClick={this.handleclick}>
//                 {this.state.istoggleon? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// ReactDOM.render(
//     <Toggle/>,
//     document.getElementById('root')
// );

// ____________________________________________________________

// function UserGreetings(props) {
//     return <h1>Welcome Back!!</h1>;
// }

// function GuestGreetings(props) {
//     return<h1>Please Sign up.</h1>;
// }

// function Greeting(props) {
//     const isloggedin= props.isloggedin;
//     if (isloggedin) {
//         return<UserGreetings/>;
//     }
//      return<GuestGreetings/>;
// }
// ReactDOM.render(
//     <Greeting isloggedin={false}/>,y
//     document.getElementById('root')
// );

// _____________________________________________________________________

// class Logincontrol extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleloginclick=this.handleloginclick.bind(this);
//         this.handlelogoutclick=this.handlelogoutclick.bind(this);
//         this.state={isloggedin:false};
//     }
//     handleloginclick(){
//         this.setState({isloggedin:true});
//     }
//     handlelogoutclick(){
//         this.setState({isloggedin:false});
//     }
//     render(){
//         const isloggedin= this.state.isloggedin;
//         let button;
//         if (isloggedin) {
//             button= <Logoutbutton onClick={this.handlelogoutclick}/>;
//         }
//         else{
//             button= <Loginbutton onClick={this.handleloginclick}/>;
//         }
//         return(
//             <div>
//             <Greetings isloggedin={isloggedin}/>
//             {button}
//             </div>
//         );
//     }
// }
// function Usergreeting(props) {
//     return <h1>Welcome Back!!</h1>;
// }
// function Guestgreeting(props) {
//     return <h1>Please log in.</h1>;
// }
// function Greetings(props) {
//     const isloggedin=props.isloggedin;
//     if (isloggedin) {
//        return <Usergreeting/>;
//     }
//     return <Guestgreeting/>;
// }
// function Loginbutton(props) {
//     return(
//         <button onClick={props.onClick}>
//             login
//         </button>
//     );
// }
// function Logoutbutton(props) {
//     return(
//         <button onClick={props.onClick}>
//             logout
//         </button>
//     );
// }
// ReactDOM.render(
//     <Logincontrol/>,
//     document.getElementById('root')
// );

// _______________________________________________________________________

// function Mailbox(props) {
//     const unreadMessages= props.unreadMessages;
//     return(
// <div>
//     <h1>Hello!!</h1>
//     {unreadMessages.length>0 &&
//     <h2>you have {unreadMessages.length} unread messages.</h2>
// }
// </div>
//     );
// }
// const messages=['React','Re:React','Re:Re:React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('root')
// );

// ___________________________________________________________________________

// function Warningbanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//     return(
//         <div className="Warning">
//             Warning!!
//         </div>
//     );
// }
// class Page extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={showWarning:true}
//         this.handleToggleClick=this.handleToggleClick.bind(this);
//     }
//     handleToggleClick(){
//         this.setState(prevState=>({
//             showWarning:!prevState.showWarning
//         }));
//     }

// render(){
//     return(
//         <div>
//         <Warningbanner warn={this.state.showWarning}/>
//         <button onClick={this.handleToggleClick}>
//             {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//         </div>
//     );
// }
// }
// ReactDOM.render(
//     <Page/>,
//     document.getElementById('root')
// );

// ________________________________________________________________________

// function NumberList(props) {
//     const numbers= props.numbers;
//     const listItems=
//     numbers.map((number)=>
//     <li key={number.toString()}>
//        {number}
//     </li>
        
//     );
//     return(
//         <ul>{listItems}</ul>
//     )
// }
// const numbers=[1,2,3,4,5];
// ReactDOM.render(
// <NumberList numbers={numbers}/>,
// document.getElementById('root')
// );

// __________________________________________________________________

// function Blog(props) {
//     const sidebar=(
//         <ul>
//             {props.posts.map(
//                 (post)=>
//                 <li key={post.id}>
//                     {post.tittle}
//                 </li>
//             )}
//         </ul>
//     )
//     const content=props.posts.map((post)=>
//             <div  key={post.id}>
//             <h1>{post.tittle}</h1>
//             <h3>{post.content}</h3>
//             </div>
//         );
//         return(
//             <div>
//                 {sidebar}
//                 <hr/>
//                 {content}
//             </div>
//         );
//     }
//     const posts=[
//         {id:1, tittle:'Hello World', content:'Welcome to learning React' },
//         {id:2, tittle:'Installation', content:'You can install React from npm'}
//     ];
//     ReactDOM.render(
//         <Blog posts= {posts}/>,
//         document.getElementById('root')
//     );
    
// _____________________________________________________________


