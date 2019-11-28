import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import {storeBAGs,getProfile} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class BAGScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      BAGs: [
        'Woonfunctie',
        'Kantoorfunctie',
        'Industriefunctie',
        'Overig',
      ],

      activeBAGs: [],

    }
  }

  componentDidMount() {
    this.props.getProfile()
    this.setState({
      activeBAGs: this.props.storedBAGs
    })
  }

  onClick(e) {
    document.activeElement.blur() 
    let activeBAGs = this.state.activeBAGs
    if(!this.isActive(e.target.id)) {
      activeBAGs.push(e.target.id)
    } else {
      activeBAGs.splice(activeBAGs.indexOf(e.target.id),1)
    }
    this.setState({activeBAGs: activeBAGs});
    this.props.storeBAGs(activeBAGs);
  }

  isActive(form) {
    for(let index in this.state.activeBAGs) {
      if(form === this.state.activeBAGs[index]) {
        return true
      }
    }
    return false
  }

  render() {
    return (
      <div className={"modal-bag-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            BAG is het Bassisregistratie Adressen en Gebouwen, geef aan welke functie de panden van de bedrijven belangrijk zijn
          </div>
          <div className={"BAG-select-container"}>
            <Row type="flex" justify="space-between" gutter={[8,8]}>
              <Col>
                {!this.isActive(this.state.BAGs[0]) &&
                  <Button id={this.state.BAGs[0]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[0]}</Button>
                }
                {this.isActive(this.state.BAGs[0]) &&
                  <Button id={this.state.BAGs[0]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[0]}</Button>
                }
              </Col>
              <Col>
                {!this.isActive(this.state.BAGs[1]) &&
                  <Button id={this.state.BAGs[1]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[1]}</Button>
                }
                {this.isActive(this.state.BAGs[1]) &&
                  <Button id={this.state.BAGs[1]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[1]}</Button>
                }
              </Col>
              <Col>
                {!this.isActive(this.state.BAGs[2]) &&
                  <Button id={this.state.BAGs[2]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[2]}</Button>
                }
                {this.isActive(this.state.BAGs[2]) &&
                  <Button id={this.state.BAGs[2]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[2]}</Button>
                }
              </Col>
            </Row>
            <Row type="flex" justify="space-around" gutter={[8,8]}>
              <Col>
                {!this.isActive(this.state.BAGs[3]) &&
                  <Button id={this.state.BAGs[3]} className={'item-container'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[3]}</Button>
                }
                {this.isActive(this.state.BAGs[3]) &&
                  <Button id={this.state.BAGs[3]} className={'item-container-active'} onClick={(e) => this.onClick(e)}>{this.state.BAGs[3]}</Button>
                }
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    storedBAGs: state.profile.bags
});
export default connect(mapStateToProps,{storeBAGs,getProfile})(BAGScreen);