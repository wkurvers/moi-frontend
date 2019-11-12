import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal, Button, Input, Typography, Divider} from 'antd';
import "./Home.css"
import AccountModal from '../../components/AccountModal/AccountModal';

const { Title } = Typography;


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showLogin: false,
      showBeginScreen: true,
      showPasswordForgot: false,
      showPasswordChange: false
    }
    this.accountModal = React.createRef();

  }

  showModal = () => {
    this.accountModal.current.showModal();
  };

  componentDidMount() {

  }

  render() {
    return (
        <div>
          <div>
            <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>
            <AccountModal ref={this.accountModal} />
          </div>
        </div>
    );
  }
}

export default Home;