import React, { Component } from 'react';
import { Username, Password } from './Components/Form'
import Button from './Components/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Sign Up/Login</h3> 
        <div>
          <form>
            usename:
            <Username />
            password:
            <Password />
          </form>
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
