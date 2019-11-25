import React, {Component} from 'react';
import {Menu, Dropdown, Icon } from 'antd';
import "./SearchProfileCreationModal.css"

class TypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      itemChosen: null,
      items: []
    }
  }

  componentDidMount() {
    this.setState({
      menu: this.buildMenu()
    })
  }

  onClick(e) {
    if(e.key !== "0") {
      this.setState({
        itemChosen: this.state.items[e.key-1]
      });
    } else {
      this.setState({
        itemChosen: null
      });
    }
  }

  buildMenu() {
    let items = [
      "type1",
      "type2",
      "type3",
      "type4"
    ];
    this.setState({items: items})
    return (
      <Menu onClick={(e) => this.onClick(e)}>
        <Menu.Item key={0}>Geen</Menu.Item>
        {items.map((item,i) => <Menu.Item key={i+1}>{item}</Menu.Item>)}
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

export default TypeScreen;