import React, {Component} from 'react';
import {Breakpoint, BreakpointProvider} from 'react-socks';
import ScrollMenuHorizontal from '../../components/scrollMenu/ScrollMenuHorizontal';
import topImage from '../../assets/Screenshot_20191118_170408.png';
import {Icon, Modal, Input, Slider, InputNumber} from 'antd';
import './Results.css';
import {Container, Row, Col} from 'react-bootstrap';
import Image from "react-bootstrap/Image";

class Results extends Component {


    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            disabled: false,
            numEmployees: 1,
            ISB: 0,
        };
        window.onscroll =() => {this.scrollFunction()};
    }

    handleDisabledChange = disabled => {
        this.setState({ disabled });
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


    render() {

        const {Search} = Input;
        const { disabled, numEmployees } = this.state;

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
                            {/*<Image src={topImage} fluid={true} />*/}
                            <h1 id={'numberOfResults'}>700 Resultaten</h1>
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
                                        <Slider range defaultValue={[20, 50]} disabled={disabled} />

                                        <h6 className={'filtersBottom'}>Regio</h6>
                                        <Input placeholder="Vul uw regio in" />

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
                                                    style={{ marginLeft: 16 }}
                                                    value={numEmployees}
                                                    onChange={this.onChangeEmployees}
                                                />
                                            </Col>
                                        </Row>

                                        <h6 className={'filtersBottom'}>ISB code</h6>
                                        <InputNumber min={1} max={10000} defaultValue={0} onChange={this.onChangeISB} />

                                    </Col>

                                    <Col className={'resultsContainer'} md={8}>
                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                        <div className={'companyContainer'}>

                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <button onClick={this.topFunction} id="myBtn" title="Go to top"> <Icon type="up" /></button>
                    </div>
                </Breakpoint>

            </BreakpointProvider>
        );
    }
}

export default Results;
