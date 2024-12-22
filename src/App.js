import React from 'react';
import './App.css';
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }
  render(){
      return(
      <div className='main'>
         <div className='box1'>
        <h1>Counter App</h1>
        <div className='box2'>
         <h2>{this.state.count}</h2>
         </div>
         <button className='b1' onClick={this.dec}>-</button>
         <button className='b2' onClick={this.inc}>+</button>
         </div>
      </div>
     
    )
  }
  inc=()=>{
    this.setState((prevState)=>({
      count:prevState.count+1,
    }))
  }
  dec=()=>{
    this.setState((prevState)=>({
      count:prevState.count-1,
    }))
  }
}



export default Counter;
