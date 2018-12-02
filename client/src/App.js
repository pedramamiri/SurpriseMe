import  React,
        { Component }     from 'react';
import  { BrowserRouter } from 'react-router-dom';
import  Main              from './containers/Main';
import  Header            from './containers/Header';
import  { Provider }      from 'react-redux';
import  store             from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
