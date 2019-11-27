import React, {Component} from 'react';
import {Row, Col, Icon} from 'antd';
import {connect} from 'react-redux';
import {storeThemes,getProfile} from "../../actions/profileCreationActions";
import themes from '../../utils/themes';
import "./SearchProfileCreationModal.css"


class ThemeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      themes: Object.values(themes),
      activeThemes: [],
    }
  }

  componentDidMount() {
    this.props.getProfile()
    this.setState({activeThemes: this.props.storedThemes})
  }

  onClick(value) {
    document.activeElement.blur() 
    let activeThemes = this.state.activeThemes
    if(!this.isActive(value)) {
      activeThemes.push(value)
    } else {
      activeThemes.splice(activeThemes.indexOf(value),1)
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

  render() {
    return (
      <div className={"Thememodal-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan welke thema's belangrijk voor jou zijn
          </div>
        </div>
        <div className={"grid-container"}>
          <Row type="flex" justify="center" gutter={[4,4]}>
          {this.state.themes.map((value,index) => 
            <Col key={index} span={6} style={{display: 'flex', justifyContent: 'center'}}>
              {!this.isActive(value.name) &&
                <div className={"logo-theme"} onClick={() => this.onClick(value.name)}>
                  <img src={value.logo} className={"logo-theme"}/>
                </div>
              }
              {this.isActive(value.name) &&
                <div className={"logo-theme"} id={value.name} onClick={() => this.onClick(value.name)}>
                  <img src={value.logo} className={"logo-theme-active"}></img>
                  <Icon className={"logo-theme-active-icon"} type="check" />
                </div>
              }
            </Col>
          )}
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    storedThemes: state.profile.themes,
});
export default connect(mapStateToProps,{storeThemes,getProfile})(ThemeScreen);