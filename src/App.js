import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValForm from './ValForm'
import Displaydata from './Displaydata'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </div>
      
      {console.log("print localtion",window.location.pathname)}
      
    <Router>
    <Route  path='/valform' component={ValForm} />
    <Route exact path='/displaydata' component={Displaydata} />
    </Router>
    </>
  );
}

export default App;
