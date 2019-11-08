import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux';
import store from './store';
import Users from "./components/Users";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Header/>
          <div className="App">
            <h1>Test</h1>
              <Users/>
          </div>
        </Provider>

    );
  }
}

export default App;