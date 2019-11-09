import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import store from './store';
import Header from "./components/header/Header";
import 'antd/dist/antd.css';
import Home from "./screens/Home/Home";


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