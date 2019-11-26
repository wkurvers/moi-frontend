import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import "./CompanyCard.css";
import themes from "../../utils/themes";

export default class CompanyCard extends Component {
  render() {
    return (
      <Col className={"companycard-container"} lg={6} md={8} xs={24}>
        <div
          className={"companycard-inner"}
          style={{
            background:
              "linear-gradient(135deg, " + themes[this.props.company.theme].colorOne + " 0%, " + themes[this.props.company.theme].colorTwo + " 100%)"
          }}
        >
          <p className={"companycard-type"}>{this.props.company.type}</p>
          <h5 className={"companycard-name"}>{this.props.company.name}</h5>
          <hr />
        </div>
      </Col>
    );
  }
}
