import React from 'react';
import ReactDOM from 'react-dom';
// function tick() {
//     const element=(
//         <div>
//         <h1>Hello World!</h1>
//         <h2> It is {new Date().toLocaleDateString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     );
// }
// setInterval(tick,1000);

// ________________________________________________________________

// function Clock(props) {
//    return( 
//    <div>
//         <h1>Hello World!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
//    }
//     function tick() {
//         ReactDOM.render(
//             <Clock date={new Date()} />,
//             document.getElementById('root')
//         );
//     }
//     setInterval(tick,1000);

//     __________________________________________________________________

// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello World!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//     function tick(){
//         ReactDOM.render(
//             <Clock date={new Date()}/>,
//             document.getElementById('root')
//         );
//     }
//     setInterval(tick,1000);

//     _____________________________________________________________________

// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={date: new Date()};
//     }
//     render(){
//         return(
//         <div>
//            <h1>Hello! World</h1>
//            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// );

// ____________________________________________________________________________

// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={date:new Date()};
//     }
//     componentDidMount(){
//         this.TimerID= setInterval(
//             ()=>this.tick(),
//             1000
//         );
//         }
//     componentWillUnmount(){
//         clearInterval(this.TimerID);
//     }
//     tick(){
//         this.setState({
//             date:new Date()
//         });
//     }
//     render(){
//         return(
//            <div>
//                <h1>Hello World!</h1>
//                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//            </div>
//         );
//     }
// }
// ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
// );

// _________________________________________________________________________

function FormattedDate(props) {
    return(
        <h2>
            It is {props.date.toLocaleTimeString()}
        </h2>
    );
}
class Clock extends React.Component{
    constructor(props){
    super(props);
    this.state={date:new Date()};
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000,
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
        <div>
            <h1>Hello world!</h1>
            <FormattedDate date={this.state.date}/>
        </div>
        );
    }
}
function App() {
    return(
<div>
    <Clock/>
    <Clock/>
    <Clock/>
</div>
    );
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);
