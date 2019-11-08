import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import store from './store';
import Users from "./components/Users";
import Header from "./components/header/Header";
=======
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {Provider} from 'react-redux';
import store from './store';
import Home from "./screens/Home/Home";
>>>>>>> 74d7cb453990e6898e0296ca62f01182aac1ebe8

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Header/>
          <div className="App">
            <h1>Test</h1>
              <Home/>
          </div>
        </Provider>

    );
  }
}

export default App;