import React, { Component } from "react";
import "./CompanyNearby.css";
import { Row, Col, Icon } from "antd";
import CompanyCard from "../companyCard/CompanyCard";

const companies = [
  { name: "Culgi B.V.", type: "Software ontwikkeling" },
  { name: "ChiralVision B.V.", type: "Onderzoek" },
  { name: "Toxys B.V.", type: "Farmacie" },
  { name: "Foxgloves advies", type: "Advies" },
  { name: "Algeo B.V.", type: "Holding" },
  { name: "Algeo", type: "ICT-dienstverlening" },
  { name: "Destil B.V.", type: "Detailhandel" },
  { name: "Liander N.V.", type: "Ontwerp" }
];

export default class CompanyNearby extends Component {
  render() {
    return (
      <div className={"companynearby-container"}>
        <Row justify="left" type="flex" gutter={[48, 48]} className="nearby" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
          {companies.map((company, i) => (
            <CompanyCard company={company}>Test</CompanyCard>
          ))}
        </Row>
      </div>
    );
  }
}
