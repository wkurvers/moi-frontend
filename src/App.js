import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Home from "./screens/Home/Home";
import Results from "./screens/results/Results";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavBar />
        <Header />

        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/results"} component={Results} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
