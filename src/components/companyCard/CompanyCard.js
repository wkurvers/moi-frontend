import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import "./CompanyCard.css";

export default class CompanyCard extends Component {
  render() {
    return (
      <Col className={"companycard-container"} lg={6} md={8} xs={24}>
        <div className={"companycard-inner"} style={{ background: "linear-gradient(135deg, #ffb24c 0%, #ed7526 100%)" }}>
          <p className={"companycard-type"}>{this.props.company.type}</p>
          <h5 className={"companycard-name"}>{this.props.company.name}</h5>
          <hr />
        </div>
      </Col>
    );
  }
}
