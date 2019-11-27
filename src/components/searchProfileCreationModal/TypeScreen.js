import React, {Component} from 'react';
import {Menu, Dropdown, Icon } from 'antd';
import "./SearchProfileCreationModal.css";
import {connect} from 'react-redux';
import {storeTypes,getProfile} from "../../actions/profileCreationActions";

class TypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      itemChosen: null,
      items: [
        "Softwareontwikkeling",
        "ICT-dienstverlening",
        "Ontwerp",
        "Holding",
        "Chemische producten",
        "Groothandel",
        "Apparatenbouw",
        "Onderzoek",
        "Bouwmaterialen",
        "Verhuur",
        "Voedselproductie",
        "Maritieme maakindustrie",
        "Installatie",
        "Financiele dienstverlening",
        "Benzinestation",
        "Zorg",
        "Duurzame energie",
        "Energie gerelateerde activiteiten",
        "Media"
      ],
    }
  }

  componentDidMount() {
    this.props.getProfile()
    this.setState({
      menu: this.buildMenu(),
      itemChosen: this.props.storedTypes
    })
    
  }

  onClick(e) {
    if(e.key !== "0") {
      let itemChosen = this.state.items[e.key-1]
      this.props.storeTypes(itemChosen)
      this.setState({
        itemChosen: itemChosen
      });
    } else {
      this.setState({
        itemChosen: null
      });
    }
  }

  buildMenu() {
    return (
      <Menu onClick={(e) => this.onClick(e)}>
        <Menu.Item key={0}>Geen</Menu.Item>
        {this.state.items.map((item,i) => <Menu.Item key={i+1}>{item}</Menu.Item>)}
      </Menu>
    );
  }

  getMenuText() {
    if(this.state.itemChosen === null) {
      return (
        <div className={"type-dropdown-menu"}>
          Kies een type <Icon type="down"/>
        </div>
      );
    } else {
      return(
        <div className={"type-dropdown-menu"}>
          {this.state.itemChosen}<Icon type="down"/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan in wat voor type bedrijf het mag zijn
          </div>
          <Dropdown overlay={this.state.menu}>
            {this.getMenuText()}
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
    storedTypes: state.profile.types
});
export default connect(mapStateToProps,{storeTypes,getProfile})(TypeScreen);