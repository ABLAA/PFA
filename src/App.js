import React, { Component } from 'react';
import {BrowserRouter ,withRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import './vendor/fontawesome-free/css/all.min.css';
import './sb-admin-2.css';
import history from './redux/history'


import {Provider } from 'react-redux';
import {ConfigureStore} from './redux/configueStore';
const store=ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <BrowserRouter >
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
