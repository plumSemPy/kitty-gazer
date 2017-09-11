import React from 'react';

const Username = (props) => {
	return <input 
	    value={ props.username }
	    type='text' 
	    name='username'
	    onChange={ props.handler }
	 />
}

const Password = (props) => {
	return <input
	    value={ props.password}
	    type='password'
	    name='password'
	    onChange={ props.handler } 
	    />
}

export { Username, Password }; 