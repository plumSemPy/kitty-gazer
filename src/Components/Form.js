import React, { Component } from 'react';

const Username = (props, handler) => {
   	  return <input 
       value={props.username}
   	   type='text' 
   	   onChange={
   	  	event => this.handler(event, { username: event.target.value })
   	  }/>  
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