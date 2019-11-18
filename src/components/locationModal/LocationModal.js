import React, {Component} from 'react';
import {Modal} from 'antd';

class AccountModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
        <Modal
            title={"Kies uw regio"}
            visible={this.state.visible}
            bodyStyle={{paddingBottom: 40}}
            footer={null}
            onCancel={this.handleCancel}
        >
        </Modal>
    );
  }
}

export default AccountModal;