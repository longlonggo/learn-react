import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

import 'bootstrap/dist/css/bootstrap.min.css';

import NameCard from './components/NameCard'

function App() {
  const tags = ['牛肉', '里脊肉']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <NameCard name="朱225" number={123456798} isHuman tags={tags} />
    </div>
  );
}

export default App;
