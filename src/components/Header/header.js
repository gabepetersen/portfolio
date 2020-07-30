import React from 'react';
import { Col } from 'antd';
import header_img from '../../images/me.jpg';
import './header.css';

class Header extends React.Component  {
  render() {
    return (
      <> 
        <Col xs={{span: 11}} md={{span: 8}}>
          <img className="header-img" src={header_img} alt="header"></img>
        </Col>
        <Col xs={{span: 20}} md={{span: 8}}>
          <div className="header-text"><p>You are currently in the Gabe zone. I do website stuff.</p></div>
        </Col>
      </>
    );
  }
}

export default Header;