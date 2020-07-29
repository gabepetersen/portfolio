import React from 'react';
import { Col, Button } from 'antd';
import './tab.css';

class Tab extends React.Component  {
  constructor(props) {
    super(props);
    if(this.props.data.justify === 'left') {
      this.state = {imageA: 1, textA: 2}
    } else {
      this.state = {imageA: 2, textA: 1}
    }
  }
  render() {
    return (
      <> 
          <Col span={8} order={this.state.imageA}>
            <Button href={this.props.data.url}>Website</Button>
          </Col>
          <Col span={8} order={this.state.textA}>
            <p>{this.props.data.text}</p>
          </Col>
      </>
    );
  }
}

export default Tab;