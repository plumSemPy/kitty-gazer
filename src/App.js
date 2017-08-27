import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Sign Up/Login</h3> 
        <div>
          <form>
            usename:
            <input type="text" name="usename"/>
            password:
            <input type="password" name="password"/>
          </form>
          <button onClick={submit()}>Sign up/Login</button>
        </div>
      </div>
    );
  }
}

export default App;
