import React, { Component } from "react";
import "./Footer.css";
import SearchBar from "../searchBar/SearchBar";
import { Row, Col, Icon } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className={"footer-image"} />

        <div className="footer-title-container">
          <h1 className="footer-title">
            Proin scelerisque{" "}
            <p className="footer-title" style={{ fontWeight: 400, display: "inline-block" }}>
              imperdiet felis
            </p>{" "}
            ut bibendum.{" "}
          </h1>
          <h3 className="footer-subtitle">
            Nam tempus metus vitae vehicula ultricies. Etiam a quam purus. Nullam ornare vel lectus at scelerisque. Donec at libero commodo, accumsan
            neque nec, accumsan ligula.{" "}
          </h3>
        </div>
        <Row style={{ width: "45vw", marginTop: "5vh" }}>
          <Col span={8}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10 }} type="shopping" />

            <p className={"footer-column-title"}>1,2 miljoen</p>
            <p className={"footer-column-subtitle"}>Bedrijven aangesloten</p>
          </Col>
          <Col span={8}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10 }} type="clock-circle" />

            <p className={"footer-column-title"}>24 uur</p>
            <p className={"footer-column-subtitle"}>Altijd up-to-date</p>
          </Col>
          <Col span={8}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10, fontWeight: 400 }} type="filter" />

            <p className={"footer-column-title"}>8 categorieën</p>
            <p className={"footer-column-subtitle"}>Duidelijk ingedeeld</p>
          </Col>
        </Row>
      </div>
    );
  }
}
