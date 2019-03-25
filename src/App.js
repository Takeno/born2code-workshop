import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ciao React
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.js
          </a>
        </header>

        <h1>
          <a href="https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d">
            Every time you build a to-do list app,
            a puppy <span role="img" aria-label="puppy">🐕</span> dies
            <span role="img" aria-label="sadface">😢</span>
          </a>
        </h1>
        <img src="https://cdn-images-1.medium.com/max/1600/1*g6c8GzN-fkt4wi1liJGdhA.jpeg" alt="tiger died" />

        <h2>Is that even possible?</h2>

      </div>
    );
  }
}

export default App;
