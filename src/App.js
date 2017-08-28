import React, { Component } from 'react';
import { Username, Password } from './Components/Form'
import Button from './Components/Button'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { username: null, password: null }
    this.handler = (event, state) => {
      event.preventDefault();
      this.setState(state)
    }
  }
  render() {
    return (
      <div className="App">
        <h3>Sign Up/Login</h3> 
        <div>
          <form>
            usename:
            <Username handler={this.handler}/>
            password:
            <Password props={this.state}/>
          </form>
          <Button creds={
            { 
              username: this.state.username, 
              password: this.state.password 
            }
          }/>
        </div>
      </div>
    );
  }
}

export default App;
