import React, { Component } from 'react';
import { Username, Password } from './Components/Form'
import Button from './Components/Button'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' }
    this.handler = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value})

    }
  }
  render() {
    return (
      <div className="App">
        <h3>Sign Up/Login</h3> 
        <div>
          <form>
            usename:
            <Username
                handler = { this.handler }
                username = { this.state.username }
            />
            password:
            <Password 
                 handler = { this.handler }
                 password = { this.state.password }
            />
          </form>
          <Button creds={
            this.state
          }/>
        </div>
      </div>
    );
  }
}

export default App;
