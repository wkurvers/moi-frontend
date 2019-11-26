import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import "./SearchProfileCreationModal.css"

class LawFormScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forms: [
        'B.V.',
        'C.V.',
        'V.O.F.',
        'Eenmanszaak',
        'Coöperatie i.o.'
      ],

      activeForms: [],

    }
  }

  onClick(e) {
    document.activeElement.blur() 
    let activeForms = this.state.activeForms
    if(!this.isActive(e.target.id)) {
      activeForms.push(e.target.id)
    } else {
      activeForms.splice(activeForms.indexOf(e.target.id),1)
    }
    this.setState({activeForms: activeForms});
  }

  isActive(form) {
    for(let index in this.state.activeForms) {
      if(form == this.state.activeForms[index]) {
        return true
      }
    }
    return false
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan in welke rechtsvorm de bedrijven mogen hebben
          </div>
          <div className={"lawform-select-container"}>
            <Row type="flex" justify="space-between" gutter={[8,8]}>
              <Col>
                {!this.isActive(this.state.forms[0]) &&
                  <Button id={this.state.forms[0]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.forms[0]}</Button>
                }
                {this.isActive(this.state.forms[0]) &&
                  <Button id={this.state.forms[0]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.forms[0]}</Button>
                }
              </Col>
              <Col>
                {!this.isActive(this.state.forms[1]) &&
                  <Button id={this.state.forms[1]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.forms[1]}</Button>
                }
                {this.isActive(this.state.forms[1]) &&
                  <Button id={this.state.forms[1]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.forms[1]}</Button>
                }
              </Col>
              <Col>
                {!this.isActive(this.state.forms[2]) &&
                  <Button id={this.state.forms[2]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.forms[2]}</Button>
                }
                {this.isActive(this.state.forms[2]) &&
                  <Button id={this.state.forms[2]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.forms[2]}</Button>
                }
              </Col>
            </Row>
            <Row type="flex" justify="space-around" gutter={[8,8]}>
              <Col>
                {!this.isActive(this.state.forms[3]) &&
                  <Button id={this.state.forms[3]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.forms[3]}</Button>
                }
                {this.isActive(this.state.forms[3]) &&
                  <Button id={this.state.forms[3]} className={'item-containeractive'} onClick={(e) => this.onClick(e)}>{this.state.forms[3]}</Button>
                }
              </Col>
              <Col>
                {!this.isActive(this.state.forms[4]) &&
                  <Button id={this.state.forms[4]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.forms[4]}</Button>
                }
                {this.isActive(this.state.forms[4]) &&
                  <Button id={this.state.forms[4]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.forms[4]}</Button>
                }
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default LawFormScreen;