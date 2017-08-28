import React, { Component } from 'react';

class Username extends Component{
   render(){
   	  return <input type='text'/>  
   } 

}

class Password extends Component{
	render(){
		return <input type='password' />
	}
}


export { Username, Password }; 