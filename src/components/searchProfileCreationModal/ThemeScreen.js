import React, {Component} from 'react';
import {Icon, Button, Row, Col, Checkbox} from 'antd';
import "./SearchProfileCreationModal.css"

class ThemeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onChange = (e) => {
    console.log(e)
  }

  getRow() {
    return (
      <Row type="flex" justify="space-between" gutter={[16, 16]}>
        <Col span={8}>
          Thema
          <Checkbox onChange={this.onChange}/>
        </Col>
        <Col span={8}>
          Thema
          <Checkbox onChange={this.onChange}/>
        </Col>
        <Col span={8}>
          Thema
          <Checkbox onChange={this.onChange}/>
        </Col>
      </Row>
    );
  }

  getThemes() {
    return (
      <div className={"theme-select-container"}>
        {this.getRow()}
        {this.getRow()}
        {this.getRow()}
      </div>
    );
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan welke thema's belangrijk voor jou zijn
          </div>
        </div>
        {this.getThemes()}
      </div>
    );
  }
}

export default ThemeScreen;