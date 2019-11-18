import React, { Component } from "react";
import styles from "./SearchBar.css";
import { Input } from "antd";
import "antd/dist/antd.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div id={"searchbar"}>
        <Input id="searchbar-input" placeholder="Zoek hier naar bedrijven" onSearch={value => console.log(value)} />
        <div id={"searchbar-button"}>
          <img id={"searchbar-button-icon"} src={require("../../assets/zoom.png")} style={{ height: 15, width: 15 }} />
        </div>
      </div>
    );
  }
}
