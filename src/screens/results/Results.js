import React, {Component} from 'react';
import {Breakpoint, BreakpointProvider} from 'react-socks';
import ScrollMenuHorizontal from '../../components/scrollMenu/ScrollMenuHorizontal';
import topImage from '../../assets/vector-abstract-modern-polygonal-geometric-background.jpg';
import {Icon, Modal, Input, Slider, InputNumber, Pagination, Tag, Menu, Dropdown, Button, Switch} from 'antd';
import './Results.css';
import {Container, Row, Col} from 'react-bootstrap';
import themes from '../../utils/themes'
import Image from "react-bootstrap/Image";
import {FETCH_USERS} from "../../actions/types";
import data from "./data.json";
import MapView from "./MapView";

const sortMenu = (
    <Menu>
      <Menu.Item>
        <a>
          Alfabetisch
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
          Alfabetisch
        </a>
      </Menu.Item>
      <Menu.Item>
        <a>
          Alfabetisch
        </a>
      </Menu.Item>
    </Menu>
);


class Results extends Component {


  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      disabled: false,
      numEmployees: 1,
      ISB: 0,
      data: data,
      mapViewActive: false
    };
    window.onscroll = () => {
      this.scrollFunction()
    };
    console.log(this.state.data.results[0])
    this.mapView = React.createRef();
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
        <Tag style={{color: "white", backgroundColor: themes[key.slice(9)].colorOne}}>{company['Thema\'s'][key]}</Tag>
    );
    return themesKeys
  }

  resultCompany() {
    const companyItems = this.state.data.results.map(company => (

        <div>
          <Row className={'companyContainer'} noGutters={true}>
            <Col xs={12} md={8} lg={6}>
              <div id={'leftside'} key={company.ID}>
                <h5 id={'companyName'}>{company.Bedrijfsnaam}</h5>
                <a href={company.Websites}>{company.Websites}</a>
                <div id={'companyThemes'}>
                  {this.getThemes(company)}
                </div>

              </div>
            </Col>
            <Col xs={6} md={4}>
              <div id={'rightside'}>
                <h6 id={'companyName'}>{company.Plaats}</h6>
                <h7>{company.Provincie}</h7>
              </div>
            </Col>
          </Row>
        </div>

    ));
    return companyItems
  }

  toggleResultView() {
    this.setState({
      mapViewActive: !this.state.mapViewActive
    })
  }

  _renderHorizontalActions() {
    const {Search} = Input;

    return (
        <div className={"horizontal-actions-container"}>

          <div className={'searchContainer'}>
            <div className={'search'}>
              <Search placeholder="Zoek een bedrijf" onSearch={value => console.log(value)}
                      enterButton/>
            </div>
          </div>

          <Dropdown overlay={sortMenu}>
            <Button>
              Sorteren <Icon type="down"/>
            </Button>
          </Dropdown>

          <div className={"results-mapview-switch-container"}>
            <h6>
              Map view
            </h6>
            <Switch className={"results-mapview-switch"} checked={this.state.mapViewActive} onClick={() => this.toggleResultView()}/>
          </div>

        </div>
    )
  }


  render() {

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
                {/*<h1 id={'numberOfResults'}>700 Resultaten</h1>*/}
                <img id={'topImage'} src={topImage}/>
              </div>

              <div className={'categoriesContainer'}>
                <ScrollMenuHorizontal/>
              </div>

              {this._renderHorizontalActions()}


              <div>
                <Container fluid={true}>
                  <Row>
                    <Col className={'filterContainer'} md={3}>
                      <h6 className={'filtersTop'}>Afstand</h6>
                      <Slider range defaultValue={[20, 50]} disabled={disabled}/>

                      <h6 className={'filtersBottom'}>Regio</h6>
                      <Input placeholder="Vul uw regio in"/>

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
                        {this.state.mapViewActive && <MapView ref={this.mapView} data={data} />}
                        {!this.state.mapViewActive && this.resultCompany()}

                      <Pagination id={'pagination'} defaultCurrent={6} total={500}/>
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
