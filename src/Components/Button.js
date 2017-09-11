import React, { Component } from 'react';
import axios from 'axios';

class Button extends Component{
   constructor(props){
   	super(props);
   	console.log(props)
   	this.state = { 
   		username: props.creds.username,
   		password: props.creds.password
   	 }
   }
   submit(){
     // axios.post(
     // 	'http://localhost:3333/api/',
     // 	this.state
     // 	).then((res, rej)=> console.log(res))
     console.log(this.state)
     console.log(this.props)
   }
   render(){
   	  return <button onClick={this.submit}> Sign Up/Login </button>  
   } 

}


export default Button; 