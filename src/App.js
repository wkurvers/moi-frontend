import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Users from "./components/Users";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <h1>Test</h1>
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
