import React, {Component} from 'react';
import {Breakpoint, BreakpointProvider} from 'react-socks';
import ScrollMenuHorizontal from '../../components/scrollMenu/ScrollMenuHorizontal';
import topImage from '../../assets/vector-abstract-modern-polygonal-geometric-background.jpg';
import {Icon, Modal, Input, Slider, InputNumber, Pagination, Tag, AutoComplete} from 'antd';
import './Results.css';
import {Container, Row, Col} from 'react-bootstrap';
import themes from '../../utils/themes'
import Image from "react-bootstrap/Image";
import {FETCH_USERS} from "../../actions/types";

class Results extends Component {


    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            disabled: false,
            numEmployees: 1,
            ISB: 0,
            data: {
                "page_size": 10,
                "page_number": 1,
                "sort_column": "bedrijfsnaam",
                "sort_direction": "asc",
                "records_filtered": 115,
                "records_total": 115,
                "results": [{
                    "ID": "3209063",
                    "Bedrijfsnaam": "3 Times Impact B.V.",
                    "Handelsnamen": ["3 Times Impact B.V."],
                    "Thema's": {"im_proef_lsh": "Life Sciences en Health"},
                    "Netwerkactiviteiten": {"ref_award_mkbtop100-2018": "MKB Innovatie Top 100 (2018)"},
                    "Websites": ["3timesimpact.nl"],
                    "Adres": "Eerste Kostverlorenkade 73",
                    "Postcode": "1052 EL",
                    "Plaats": "Amsterdam",
                    "Gemeente": "Amsterdam",
                    "Provincie": "Noord-Holland",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2016,
                    "Rechtsvorm": "B.V.",
                    "BAG": "woonfunctie",
                    "SBI Code": "6201",
                    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
                    "KvK-Nummer": "67045316"
                }, {
                    "ID": "2678774",
                    "Bedrijfsnaam": "A-Fiber Speedlink C.V.",
                    "Handelsnamen": ["A-Fiber Speedlink C.V.", "A-Fiber", "Iris", "Iris Networks", "AFIBER"],
                    "Thema's": {"im_proef_ict": "ICT"},
                    "Netwerkactiviteiten": {"ref_platform_amsterdam-smart-city": "Amsterdam Smart City"},
                    "Websites": ["www.afiber.net"],
                    "Adres": "Herenweg 115",
                    "Postcode": "2105 MG",
                    "Plaats": "Heemstede",
                    "Gemeente": "Heemstede",
                    "Provincie": "Noord-Holland",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2015,
                    "Rechtsvorm": "C.V.",
                    "BAG": "overige gebruiksfunctie",
                    "SBI Code": "6110",
                    "SBI Hoofdactiviteit": "Draadgebonden telecommunicatie",
                    "KvK-Nummer": "64350649"
                }, {
                    "ID": "3051735",
                    "Bedrijfsnaam": "AntTail Holding B.V.",
                    "Handelsnamen": ["AntTail Holding B.V."],
                    "Thema's": {"im_proef_ict": "ICT", "im_proef_lsh": "Life Sciences en Health"},
                    "Netwerkactiviteiten": [],
                    "Websites": ["anttail.com"],
                    "Adres": "Computerweg 22",
                    "Postcode": "3542 DR",
                    "Plaats": "Utrecht",
                    "Gemeente": "Utrecht",
                    "Provincie": "Utrecht",
                    "Werknemers": "Cat. 01: 1 - 1",
                    "Jaar": 2014,
                    "Rechtsvorm": "B.V.",
                    "BAG": "industriefunctie",
                    "SBI Code": "6420",
                    "SBI Hoofdactiviteit": "Financiele holdings",
                    "KvK-Nummer": "60621044"
                }, {
                    "ID": "2262531",
                    "Bedrijfsnaam": "AntTail.com B.V.",
                    "Handelsnamen": ["AntTail.com B.V."],
                    "Thema's": {"im_proef_ict": "ICT", "im_proef_lsh": "Life Sciences en Health"},
                    "Netwerkactiviteiten": [],
                    "Websites": ["anttail.com"],
                    "Adres": "Computerweg 22",
                    "Postcode": "3542 DR",
                    "Plaats": "Utrecht",
                    "Gemeente": "Utrecht",
                    "Provincie": "Utrecht",
                    "Werknemers": "Cat. 01: 1 - 1",
                    "Jaar": 2015,
                    "Rechtsvorm": "B.V.",
                    "BAG": "industriefunctie",
                    "SBI Code": "6201",
                    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
                    "KvK-Nummer": "62648764"
                }, {
                    "ID": "1897389",
                    "Bedrijfsnaam": "AppsForAgri B.V.",
                    "Handelsnamen": ["AppsForAgri B.V.", "Boerenappstore"],
                    "Thema's": {"im_proef_agrifood": "AgriFood", "im_proef_ict": "ICT"},
                    "Netwerkactiviteiten": [],
                    "Websites": ["www.appsforagri.com"],
                    "Adres": "Stadhuisplein 345a",
                    "Postcode": "5038 TH",
                    "Plaats": "Tilburg",
                    "Gemeente": "Tilburg",
                    "Provincie": "Noord-Brabant",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2013,
                    "Rechtsvorm": "B.V.",
                    "BAG": "kantoorfunctie",
                    "SBI Code": "6201",
                    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
                    "KvK-Nummer": "58299238"
                }, {
                    "ID": "10785",
                    "Bedrijfsnaam": "Bfactory Health Products B.V.",
                    "Handelsnamen": ["Bfactory Health Products B.V.", "Bfactory", "Dermagiq", "Vetramil", "Revamil"],
                    "Thema's": {"im_proef_lsh": "Life Sciences en Health"},
                    "Netwerkactiviteiten": {"ref_leden_wageningen-university-research-spin-offs": "Wageningen University & Research Spin-offs"},
                    "Websites": ["www.bfactory.nl"],
                    "Adres": "Remmerden 58",
                    "Postcode": "3911 TZ",
                    "Plaats": "Rhenen",
                    "Gemeente": "Rhenen",
                    "Provincie": "Utrecht",
                    "Werknemers": "Cat. 02: 2 - 4",
                    "Jaar": 2008,
                    "Rechtsvorm": "B.V.",
                    "BAG": "industriefunctie",
                    "SBI Code": "2042",
                    "SBI Hoofdactiviteit": "Vervaardiging van parfums en cosmetica",
                    "KvK-Nummer": "09182442"
                }, {
                    "ID": "3275677",
                    "Bedrijfsnaam": "Bfactory International B.V.",
                    "Handelsnamen": ["Bfactory International B.V."],
                    "Thema's": {"im_proef_lsh": "Life Sciences en Health"},
                    "Netwerkactiviteiten": {"ref_leden_wageningen-university-research-spin-offs": "Wageningen University & Research Spin-offs"},
                    "Websites": ["www.bfactory.nl"],
                    "Adres": "Remmerden 58",
                    "Postcode": "3911 TZ",
                    "Plaats": "Rhenen",
                    "Gemeente": "Rhenen",
                    "Provincie": "Utrecht",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2016,
                    "Rechtsvorm": "B.V.",
                    "BAG": "industriefunctie",
                    "SBI Code": "2042",
                    "SBI Hoofdactiviteit": "Vervaardiging van parfums en cosmetica",
                    "KvK-Nummer": "67089275"
                }, {
                    "ID": "575731",
                    "Bedrijfsnaam": "BLAUD B.V.",
                    "Handelsnamen": ["BLAUD B.V.", "Blaud"],
                    "Thema's": {"im_proef_ict": "ICT"},
                    "Netwerkactiviteiten": {"ref_award_mkbtop100-2018": "MKB Innovatie Top 100 (2018)"},
                    "Websites": ["blaud.com"],
                    "Adres": "Duwboot 20",
                    "Postcode": "3991 CD",
                    "Plaats": "Houten",
                    "Gemeente": "Houten",
                    "Provincie": "Utrecht",
                    "Werknemers": "Cat. 03: 5 - 9",
                    "Jaar": 2007,
                    "Rechtsvorm": "B.V.",
                    "BAG": "kantoorfunctie",
                    "SBI Code": "6201",
                    "SBI Hoofdactiviteit": "Ontwikkelen, produceren en uitgeven van software",
                    "KvK-Nummer": "30221540"
                }, {
                    "ID": "2312918",
                    "Bedrijfsnaam": "Cerescon B.V.",
                    "Handelsnamen": ["Cerescon B.V."],
                    "Thema's": {"im_proef_agrifood": "AgriFood", "im_proef_htsm": "HTSM"},
                    "Netwerkactiviteiten": {
                        "ref_award_accenture-2017": "award accenture 2017",
                        "ref_platform_ges2019": "Ges2019",
                        "ref_platform_holland-robotics": "Holland Robotics",
                        "ref_award_mkbtop100-2018": "MKB Innovatie Top 100 (2018)",
                        "ref_award_accenture-2017_winnaar": "Winnaar van de Accenture Innovation Award 2017"
                    },
                    "Websites": ["www.cerescon.com"],
                    "Adres": "de Geestakkers 5",
                    "Postcode": "5591 RC",
                    "Plaats": "Heeze",
                    "Gemeente": "Heeze-Leende",
                    "Provincie": "Noord-Brabant",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2014,
                    "Rechtsvorm": "B.V.",
                    "BAG": "industriefunctie",
                    "SBI Code": "72111",
                    "SBI Hoofdactiviteit": "Biotechnologisch speur- en ontwikkelingswerk op het gebied van agrarische producten en processen",
                    "KvK-Nummer": "62067338"
                }, {
                    "ID": "2174106",
                    "Bedrijfsnaam": "Cerescon Holding B.V.",
                    "Handelsnamen": ["Cerescon Holding B.V."],
                    "Thema's": {"im_proef_agrifood": "AgriFood", "im_proef_htsm": "HTSM"},
                    "Netwerkactiviteiten": {
                        "ref_award_accenture-2017": "award accenture 2017",
                        "ref_platform_ges2019": "Ges2019",
                        "ref_platform_holland-robotics": "Holland Robotics",
                        "ref_award_mkbtop100-2018": "MKB Innovatie Top 100 (2018)",
                        "ref_award_accenture-2017_winnaar": "Winnaar van de Accenture Innovation Award 2017"
                    },
                    "Websites": ["www.cerescon.com"],
                    "Adres": "Haagdoorn 3",
                    "Postcode": "5666 BW",
                    "Plaats": "Geldrop",
                    "Gemeente": "Geldrop-Mierlo",
                    "Provincie": "Noord-Brabant",
                    "Werknemers": "Cat. 00: Onbekend",
                    "Jaar": 2014,
                    "Rechtsvorm": "B.V.",
                    "BAG": "woonfunctie",
                    "SBI Code": "7112",
                    "SBI Hoofdactiviteit": "Ingenieurs en overig technisch ontwerp en advies",
                    "KvK-Nummer": "61983861"
                }],
                "error": false,
                "statusCode": 200,
                "message": "OK"
            },
        };
        window.onscroll = () => {
            this.scrollFunction()
        };
        console.log(this.state.data.results[0])
    }

    handleDisabledChange = disabled => {
        this.setState({disabled});
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onChangeEmployees = value => {
        this.setState({
            numEmployees: value,
        });
    };

    onChangeISB = value => {
        this.setState({
            ISB: value,
        });
    };

    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    scrollFunction() {
        let mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    getThemes(company) {
        const themesKeys = Object.keys(company['Thema\'s']).map(key =>
            <Tag style={{
                color: "white",
                background:
                    "linear-gradient(135deg, " +
                    themes[key.slice(9)].colorOne +
                    " 0%, " +
                    themes[key.slice(9)].colorTwo +
                    " 100%)",
            }}>{company['Thema\'s'][key]}</Tag>
        );
        return themesKeys
    }


    resultCompany() {
        const companyItems = this.state.data.results.map(company => (

            <div>
                <Row className={'companyContainer'} noGutters={true}>
                    <Col xs={12} md={6} lg={6}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div id={'companyTitleContainer'} key={company.ID}>
                                <h5 id={'companyName'}>{company.Bedrijfsnaam}</h5>
                                <a href={company.Websites}>{company.Websites}</a>
                            </div>
                        </div>

                    </Col>
                    <Col xs={6} md={4}>
                        <div id={'companyThemesContainer'}>
                            <div id={'companyThemes'}>
                                {this.getThemes(company)}
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} md={2}>
                        <div id={'rightside'}>
                            <h6>{company.Plaats}</h6>
                            <h7>{company.Provincie}</h7>
                        </div>
                    </Col>
                </Row>
            </div>

        ));
        return companyItems
    }


    render() {

        const {Search} = Input;
        const {disabled, numEmployees} = this.state;

        const companyItems = this.state.data.results;

        return (
            <BreakpointProvider>
                <Breakpoint small down>

                    <div className={'categoriesContainer'}>
                        <ScrollMenuHorizontal/>
                    </div>
                    <Modal
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <div className={'innerModalContainer'}>
                            <h5>fds</h5>
                        </div>
                    </Modal>
                    <div id={'footer'}>
                        <div id={'footerImages'}>
                            <Icon type="filter" onClick={this.showModal}/>
                            <Icon type="search"/>
                        </div>
                    </div>
                </Breakpoint>


                <Breakpoint medium up>
                    <div>
                        <div className={'topImageContainer'}>
                            <h1 id={'numberOfResults'}>{this.state.data.records_total} resultaten</h1>
                            <img id={'topImage'} src={topImage}/>
                        </div>

                        <div className={'categoriesContainer'}>
                            <ScrollMenuHorizontal/>
                        </div>
                        <div className={'searchContainer'}>
                            <div className={'search'}>
                                <Search placeholder="Zoek een bedrijf" onSearch={value => console.log(value)}
                                        enterButton/>
                            </div>
                        </div>

                        <div>
                            <Container fluid={true}>
                                <Row>
                                    <Col className={'filterContainer'} md={3}>
                                        <h6 className={'filtersTop'}>Afstand</h6>
                                        <Slider range defaultValue={[20, 50]} disabled={disabled}/>

                                        <h6 className={'filtersBottom'}>Regio</h6>
                                        <AutoComplete placeholder="Vul uw regio in"/>

                                        <h6 className={'filtersBottom'}>Aantal werknemers</h6>

                                        <Row>
                                            <Col span={12}>
                                                <Slider
                                                    min={1}
                                                    max={20}
                                                    onChange={this.onChangeEmployees}
                                                    value={typeof numEmployees === 'number' ? numEmployees : 0}
                                                />
                                            </Col>
                                            <Col span={4}>
                                                <InputNumber
                                                    min={1}
                                                    max={20}
                                                    style={{marginLeft: 16}}
                                                    value={numEmployees}
                                                    onChange={this.onChangeEmployees}
                                                />
                                            </Col>
                                        </Row>

                                        <h6 className={'filtersBottom'}>ISB code</h6>
                                        <InputNumber min={1} max={10000} defaultValue={0} onChange={this.onChangeISB}/>
                                    </Col>

                                    <Col className={'resultsContainer'}>
                                        {this.resultCompany()}

                                        <Pagination id={'pagination'} defaultCurrent={1} total={500}/>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <button onClick={this.topFunction} id="myBtn" title="Go to top"><Icon type="up"/></button>
                    </div>
                </Breakpoint>

            </BreakpointProvider>
        );
    }
}

export default Results;
