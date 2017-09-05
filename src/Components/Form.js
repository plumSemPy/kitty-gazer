import React from 'react';

const Username = (props) => {
	return <input 
	    value={ props.username }
	    type='text' 
	    onChange={ props.handler}
	 />
}

const Password = (props) => {
	return <input
	    value={ props.password}
	    type='password'
	    onChange={ props.handler } 
	    />
}

export { Username, Password }; 