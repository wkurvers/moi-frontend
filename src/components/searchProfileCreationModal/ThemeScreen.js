import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';
import {connect} from 'react-redux';
import {storeThemes} from "../../actions/profileCreationActions";
import "./SearchProfileCreationModal.css"

class ThemeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      themes: [
        'AgriFood',
        'Bouw',
        'Chemie',
        'Circulaire Economie',
        'Creatieve Industrie',
        'Energie',
        'HTSM',
        'ICT',
        'Life Sciences en Health',
        'Logistiek',
        'Social Impact',
        'Tuinbouw',
        'Water'
      ],
      activeThemes: [],
      selectedThemes: []
    }
  }

  onClick(e) {
    document.activeElement.blur() 
    let activeThemes = this.state.activeThemes
    if(!this.isActive(e.target.id)) {
      activeThemes.push(e.target.id)
    } else {
      activeThemes.splice(activeThemes.indexOf(e.target.id),1)
    }
    this.setState({activeThemes: activeThemes});
    this.props.storeThemes(activeThemes)
  }

  isActive(theme) {
    for(let index in this.state.activeThemes) {
      if(theme === this.state.activeThemes[index]) {
        return true
      }
    }
    return false
  }

  getRow(rowNum, rowCount) {
    let startIn = rowNum * 3;
    let middleIn;
    let endIn;
    if(startIn !== this.state.themes.length-1) {
      middleIn = startIn + 1;
      if(middleIn !== this.state.themes.length-1) {
        endIn = startIn + 2;
      }
    }
    return (
      <Row type="flex" justify="space-between" gutter={[16, 16]}>
        <Col>
          <div id={this.state.themes[startIn]} onClick={(e) => this.onClick(e)}>{this.state.themes[startIn]}</div>
        </Col>
        <Col>
          <div id={this.state.themes[middleIn]} onClick={(e) => this.onClick(e)}>{this.state.themes[middleIn]}</div>
        </Col>
        <Col>
          <div id={this.state.themes[endIn]} onClick={(e) => this.onClick(e)}>{this.state.themes[endIn]}</div>
        </Col>
      </Row>
    );
  }

  getThemes() {
    let themeCount = this.state.themes.length;
    let rowCount = Math.ceil(themeCount/3);
    return (
      <div className={"theme-select-container"}>
        {this.getRow(0,rowCount)}
        {this.getRow(1,rowCount)}
        {this.getRow(2,rowCount)}
        {this.getRow(3,rowCount)}
        {this.getRow(4,rowCount)}
      </div>
    );
  }

  render() {
    return (
      <div className={"Thememodal-container"}>
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

const mapStateToProps = state =>  ({
    storedThemes: state.profile.themes
});
export default connect(mapStateToProps,{storeThemes})(ThemeScreen);