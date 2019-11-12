import React, { Component } from "react";
import "./Header.css";
import SearchBar from "../searchbar/SearchBar";

export default class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="header-title-container">
          <img
            className={"header-image"}
            src={require("../../assets/header_shape.svg")}
          />
          <img
            className={"header-image-building"}
            src={require("../../assets/building_shape.png")}
          />
          <h1 className="header-title">
            <p
              className="header-title"
              style={{ fontWeight: 400, display: "inline-block" }}
            >
              Suspendisse
            </p>{" "}
            sodales nulla{" "}
            <p
              className="header-title"
              style={{ fontWeight: 400, display: "inline-block" }}
            >
              in nulla
            </p>{" "}
            molestie placerat.
          </h1>
          <h3 className="header-subtitle">
            Curabitur luctus sapien auctor augue dapibus, non sodales augue
            cursus. Cras fermentum tortor a magna semper.
          </h3>
          <SearchBar />
        </div>
      </div>
    );
  }
}
