import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/Main';
import Header from './containers/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
