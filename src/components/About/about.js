import React from 'react';
import { Col } from 'antd';
import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import about_img from '../../images/ladywithermine.jpg';
import './about.css';

class About extends React.Component  {
  render() {
    return (
      <> 
          <Col span={7}>
            <img className="about-img" src={about_img} alt="about"></img>
          </Col>
          <Col span={7}>
            I like happiness, and I also like coding. These things go together on occaison.
          </Col>
          <Col span={7}>
            <a href="https://www.instagram.com/magnvs_asinvs/">
              <InstagramOutlined />
            </a>
            <a href="https://www.linkedin.com/in/gabeardenpetersen/">
              <LinkedinOutlined />  
            </a>
          </Col>
      </>
    );
  }
}

export default About;