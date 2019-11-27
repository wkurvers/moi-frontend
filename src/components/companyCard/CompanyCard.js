import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import "./CompanyCard.css";
import themes from "../../utils/themes";

export default class CompanyCard extends Component {
  componentDidMount() {
    console.log(Object.keys(this.props.company["Thema's"])[0].slice(3));
  }

  render() {
    return (
      <Col className={"companycard-container"} lg={6} md={8} xs={24}>
        <div
          className={"companycard-inner"}
          style={{
            background:
              "linear-gradient(135deg, " +
              themes[Object.keys(this.props.company["Thema's"])[0].slice(9)].colorOne +
              " 0%, " +
              themes[Object.keys(this.props.company["Thema's"])[0].slice(9)].colorTwo +
              " 100%)"
          }}
        >
          <p className={"companycard-type"}>{Object.values(this.props.company["Thema's"])[0]}</p>
          <h5 className={"companycard-name"}>{this.props.company.Bedrijfsnaam}</h5>
          <hr />
        </div>
      </Col>
    );
  }
}
