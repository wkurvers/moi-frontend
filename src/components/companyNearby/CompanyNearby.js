import React, { Component } from "react";
import "./CompanyNearby.css";
import { Row, Col, Icon } from "antd";
import CompanyCard from "../companyCard/CompanyCard";

const results = [
  {
    ID: "3209063",
    Bedrijfsnaam: "3 Times Impact B.V.",
    Handelsnamen: ["3 Times Impact B.V."],
    "Thema's": {
      im_proef_lsh: "Life Sciences en Health",
      "im_proef_social-impact": "Social Impact"
    },
    Netwerkactiviteiten: {
      "ref_award_mkbtop100-2018": "MKB Innovatie Top 100 (2018)"
    },
    Websites: ["3timesimpact.nl"],
    Adres: "Pernéstraat 15",
    Postcode: "1901 AV",
    Plaats: "Castricum",
    Gemeente: "Castricum",
    Provincie: "Noord-Holland",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2016,
    Rechtsvorm: "B.V.",
    BAG: "woonfunctie",
    "SBI Code": "6201",
    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
    "KvK-Nummer": "67045316"
  },
  {
    ID: "2678774",
    Bedrijfsnaam: "A-Fiber Speedlink C.V.",
    Handelsnamen: ["A-Fiber Speedlink C.V.", "A-Fiber", "Iris", "Iris Networks", "AFIBER"],
    "Thema's": {
      im_proef_ict: "ICT"
    },
    Netwerkactiviteiten: {
      "ref_platform_amsterdam-smart-city": "Amsterdam Smart City"
    },
    Websites: ["www.afiber.net"],
    Adres: "Herenweg 115",
    Postcode: "2105 MG",
    Plaats: "Heemstede",
    Gemeente: "Heemstede",
    Provincie: "Noord-Holland",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2015,
    Rechtsvorm: "C.V.",
    BAG: "overige gebruiksfunctie",
    "SBI Code": "6110",
    "SBI Hoofdactiviteit": "Draadgebonden telecommunicatie",
    "KvK-Nummer": "64350649"
  },
  {
    ID: "4079077",
    Bedrijfsnaam: "aendless B.V.",
    Handelsnamen: ["aendless B.V."],
    "Thema's": {
      im_proef_energie: "Energie",
      "im_proef_social-impact": "Social Impact"
    },
    Netwerkactiviteiten: [],
    Websites: ["aendless.nl"],
    Adres: "Noorderhavenstraat 49",
    Postcode: "7202 DD",
    Plaats: "Zutphen",
    Gemeente: "Zutphen",
    Provincie: "Gelderland",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: null,
    Rechtsvorm: "B.V.",
    BAG: "onbekend",
    "SBI Code": "00000000",
    "SBI Hoofdactiviteit": "Onbekend",
    "KvK-Nummer": "72063912"
  },
  {
    ID: "3042287",
    Bedrijfsnaam: "AerSmash B.V.",
    Handelsnamen: ["AerSmash B.V."],
    "Thema's": {
      im_proef_agrifood: "AgriFood",
      im_proef_htsm: "HTSM"
    },
    Netwerkactiviteiten: [],
    Websites: ["www.aersmash.com"],
    Adres: "Burg Veenhovenplein 3",
    Postcode: "7957 BA",
    Plaats: "de Wijk",
    Gemeente: "De Wolden",
    Provincie: "Drenthe",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2016,
    Rechtsvorm: "B.V.",
    BAG: "kantoorfunctie",
    "SBI Code": "7112",
    "SBI Hoofdactiviteit": "Ingenieurs en overig technisch ontwerp en advies",
    "KvK-Nummer": "65316797"
  },
  {
    ID: "3456606",
    Bedrijfsnaam: "AerSmash XL B.V.",
    Handelsnamen: ["AerSmash XL B.V."],
    "Thema's": {
      im_proef_agrifood: "AgriFood",
      im_proef_htsm: "HTSM"
    },
    Netwerkactiviteiten: [],
    Websites: ["www.aersmash.com"],
    Adres: "Burg Veenhovenplein 3",
    Postcode: "7957 BA",
    Plaats: "de Wijk",
    Gemeente: "De Wolden",
    Provincie: "Drenthe",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2016,
    Rechtsvorm: "B.V.",
    BAG: "kantoorfunctie",
    "SBI Code": "74102",
    "SBI Hoofdactiviteit": "Industrieel en productontwerp",
    "KvK-Nummer": "67446760"
  },
  {
    ID: "3051735",
    Bedrijfsnaam: "AntTail Holding B.V.",
    Handelsnamen: ["AntTail Holding B.V."],
    "Thema's": {
      im_proef_ict: "ICT",
      im_proef_lsh: "Life Sciences en Health"
    },
    Netwerkactiviteiten: [],
    Websites: ["anttail.com"],
    Adres: "Computerweg 22",
    Postcode: "3542 DR",
    Plaats: "Utrecht",
    Gemeente: "Utrecht",
    Provincie: "Utrecht",
    Werknemers: "Cat. 01: 1 - 1",
    Jaar: 2014,
    Rechtsvorm: "B.V.",
    BAG: "industriefunctie",
    "SBI Code": "6420",
    "SBI Hoofdactiviteit": "Financiele holdings",
    "KvK-Nummer": "60621044"
  },
  {
    ID: "2262531",
    Bedrijfsnaam: "AntTail.com B.V.",
    Handelsnamen: ["AntTail.com B.V."],
    "Thema's": {
      im_proef_ict: "ICT",
      im_proef_lsh: "Life Sciences en Health"
    },
    Netwerkactiviteiten: [],
    Websites: ["anttail.com"],
    Adres: "Computerweg 22",
    Postcode: "3542 DR",
    Plaats: "Utrecht",
    Gemeente: "Utrecht",
    Provincie: "Utrecht",
    Werknemers: "Cat. 01: 1 - 1",
    Jaar: 2015,
    Rechtsvorm: "B.V.",
    BAG: "industriefunctie",
    "SBI Code": "6201",
    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
    "KvK-Nummer": "62648764"
  },
  {
    ID: "1897389",
    Bedrijfsnaam: "AppsForAgri B.V.",
    Handelsnamen: ["AppsForAgri B.V.", "Boerenappstore"],
    "Thema's": {
      im_proef_agrifood: "AgriFood",
      im_proef_ict: "ICT"
    },
    Netwerkactiviteiten: [],
    Websites: ["www.appsforagri.com"],
    Adres: "Stadhuisplein 345a",
    Postcode: "5038 TH",
    Plaats: "Tilburg",
    Gemeente: "Tilburg",
    Provincie: "Noord-Brabant",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2013,
    Rechtsvorm: "B.V.",
    BAG: "kantoorfunctie",
    "SBI Code": "6201",
    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
    "KvK-Nummer": "58299238"
  },
  {
    ID: "591316",
    Bedrijfsnaam: "Arox ICT Solutions B.V.",
    Handelsnamen: ["Arox ICT Solutions B.V."],
    "Thema's": {
      im_proef_ict: "ICT",
      im_proef_logistiek: "Logistiek"
    },
    Netwerkactiviteiten: {
      "ref_award_mkbtop100-2017": "MKB Innovatie Top 100 (2017)"
    },
    Websites: ["www.arox.nl"],
    Adres: "Industrieweg 4",
    Postcode: "9601 LJ",
    Plaats: "Hoogezand",
    Gemeente: "Midden-Groningen",
    Provincie: "Groningen",
    Werknemers: "Cat. 03: 5 - 9",
    Jaar: 2012,
    Rechtsvorm: "B.V.",
    BAG: "woonfunctie",
    "SBI Code": "6209",
    "SBI Hoofdactiviteit": "Overige dienstverlenende activiteiten op het gebied van informatietechnologie",
    "KvK-Nummer": "55856128"
  },
  {
    ID: "3512551",
    Bedrijfsnaam: "Arox Smart Technologies B.V.",
    Handelsnamen: ["Arox Smart Technologies B.V."],
    "Thema's": {
      im_proef_ict: "ICT",
      im_proef_logistiek: "Logistiek"
    },
    Netwerkactiviteiten: [],
    Websites: ["www.arox.nl"],
    Adres: "Industrieweg 4",
    Postcode: "9601 LJ",
    Plaats: "Hoogezand",
    Gemeente: "Midden-Groningen",
    Provincie: "Groningen",
    Werknemers: "Cat. 00: Onbekend",
    Jaar: 2017,
    Rechtsvorm: "B.V.",
    BAG: "woonfunctie",
    "SBI Code": "6201",
    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
    "KvK-Nummer": "68798156"
  }
];

export default class CompanyNearby extends Component {
  render() {
    return (
      <div className={"companynearby-container"}>
        <Row justify="left" type="flex" gutter={[48, 48]} className="nearby" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
          {results.map((company, i) => (
            <CompanyCard company={company}>Test</CompanyCard>
          ))}
        </Row>
      </div>
    );
  }
}
