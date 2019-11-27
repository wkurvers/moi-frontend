import React, { Component } from "react";
import "./Footer.css";
import SearchBar from "../searchBar/SearchBar";
import { Row, Col, Icon } from "antd";

export default class Footer extends Component {
  render() {
    return (
      <Row className="footer">
        <img className={"footer-image"} src={require("../../assets/connected_dots.png")} />

        <Row className="footer-title-container">
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
        </Row>
        <Row style={{ marginTop: "5vh" }} gutter={[48, 48]}>
          <Col lg={8} md={8} xs={24}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10 }} type="shopping" />

            <p className={"footer-column-title"}>1,2 miljoen</p>
            <p className={"footer-column-subtitle"}>Bedrijven aangesloten</p>
          </Col>
          <Col lg={8} md={8} xs={24}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10 }} type="clock-circle" />

            <p className={"footer-column-title"}>24 uur</p>
            <p className={"footer-column-subtitle"}>Altijd up-to-date</p>
          </Col>
          <Col lg={8} md={8} xs={24}>
            <Icon style={{ fontSize: 36, color: "white", textAlign: "center", width: "100%", marginBottom: 10, fontWeight: 400 }} type="filter" />

            <p className={"footer-column-title"}>8 categorieën</p>
            <p className={"footer-column-subtitle"}>Duidelijk ingedeeld</p>
          </Col>
        </Row>
      </Row>
    );
  }
}
