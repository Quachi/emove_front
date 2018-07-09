import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import CustomNavbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome eMove</h1>
        </header>
        <CustomNavbar></CustomNavbar>
        <Routes></Routes>
        
      </div>


    );
  }
}

export default App;
