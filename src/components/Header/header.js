import React from 'react';
import { Col } from 'antd';
import header_img from '../../images/linkedin.jpg';
import './header.css';

class Header extends React.Component  {
  render() {
    return (
      <> 
        <Col span={10}>
          <img className="header-img" src={header_img} alt="header"></img>
        </Col>
        <Col span={10}>
          <p>You are currently in the Gabe zone.</p>
        </Col>
      </>
    );
  }
}

export default Header;