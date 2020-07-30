import React from 'react';
import { Col } from 'antd';

import './tab.css';

class Tab extends React.Component  {
  constructor(props) {
    super(props);
    if(this.props.data.justify === 'left') {
      this.state = {imageA: 1, textA: 2, visible: false, bgImage: this.props.data.image};
    } else {
      this.state = {imageA: 2, textA: 1, visible: false, bgImage: this.props.data.image};
    }
  }

  render() {
    return (
      <> 
        <Col xs={{span: 24, order: 2}} md={{span: 9, order: this.state.imageA}}>
          {/* Sorta crappy solution to fix image passing issue - might create firebase database instead */}
          <a target="_blank" rel="noopener noreferrer" href={this.props.data.url}>
            <img className="tab-image" alt="monkey" src={require(`../../images/tab${this.props.data.id}.jpg`)}></img>
          </a>
        </Col>
        <Col xs={{span: 24, order: 1}} md={{span: 9, order: this.state.textA}}>
          <p className="tab-text">{this.props.data.text}</p>
        </Col>
      </>
    );
  }
}

export default Tab;