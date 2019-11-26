import React, { Component } from "react";
import "./CompanyNearby.css";
import { Row, Col, Icon } from "antd";
import CompanyCard from "../companyCard/CompanyCard";

const companies = [
  { name: "Culgi B.V.", type: "Software ontwikkeling", theme: "htsm" },
  { name: "ChiralVision B.V.", type: "Onderzoek", theme: "agrifood" },
  { name: "Toxys B.V.", type: "Farmacie", theme: "chemie" },
  { name: "Foxgloves advies", type: "Advies", theme: "circulaire_economie" },
  { name: "Algeo B.V.", type: "Holding", theme: "lsh" },
  { name: "Algeo", type: "ICT-dienstverlening", theme: "bouw" },
  { name: "Destil B.V.", type: "Detailhandel", theme: "energie" },
  { name: "Liander N.V.", type: "Ontwerp", theme: "agrifood" }
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
