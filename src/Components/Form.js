import React, { Component } from 'react';

class Username extends Component{
	constructor(props){
		super(props);
		this.state = { value: null }
	}
    render(){
   	  return <input 
       value={this.state.value}
   	   type='text' 
   	   onChange={
   	  	event => this.setState({ value: event.target.value })
   	  }/>  
   } 

}

class Password extends Component{
	constructor(props){
		super(props);
		this.state = { value: null }
	}
    render(){
   	  return <input 
   	    value={this.state.value} 
   	    type='password' 
   	    onChange={
   	  	  event => this.setState({ value: event.target.value })
   	  }/>  
   } 
}


export { Username, Password }; 