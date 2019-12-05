import React, {Component} from 'react';
import {Icon,Button} from 'antd';
import "./SearchProfileCreationModal.css"

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className={"nav-buttons-container"}>
          <Button className={"nav-button"} onClick={() => this.props.prev(this.props.current)} icon="step-backward"/>
          <Button className={"nav-button"} onClick={() => this.props.next(this.props.current)} icon="step-forward"/>
        </div>
    );
  }
}

export default Footer;