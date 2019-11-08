import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import {Provider} from 'react-redux';
import store from './store';
import Home from "./screens/Home/Home";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <h1>Test</h1>
              <Home/>
          </div>
        </Provider>

    );
  }
}

export default App;
