import React, {Component} from 'react';
import {Row, Col} from 'antd';
import "./SearchProfileCreationModal.css"

class LawFormScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={"modal-container"}>
        <div className={"info-text-container"}>
          <div className={"info-text"}>
            Geef aan in welke rechtsvorm de bedrijven mogen hebben
          </div>
          <div className={"lawform-select-container"}>
            <Row type="flex" justify="space-between" gutter={[16, 16]}>
              <Col span={3}>
                B.V.
              </Col>
              <Col span={3}>
                C.V.
              </Col>
              <Col span={3}>
                V.O.F.
              </Col>
              <Col span={3}>
                Eenmanszaak
              </Col>
              <Col span={3}>
                Coöperatie i.o.
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default LawFormScreen;