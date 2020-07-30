import React from 'react';
import { Row, Col } from 'antd';
import { InstagramOutlined, LinkedinOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';
import './about.css';

class About extends React.Component  {
  render() {
    return (
      <> 
        <Col>
          <Row justify="center" align="middle">
            <Col span={24}>
              <div className="about-text"><p>More to come soon. Feel free to reach out!</p></div>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col className="social-bar" xs={{span: 12}} md={{span: 6}}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/magnvs_asinvs/">
                <InstagramOutlined style={{
                  fontSize: '50px'
                }} />
              </a>
            </Col>
            <Col className="social-bar" xs={{span: 12}} md={{span: 6}}>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabeardenpetersen/">
                <LinkedinOutlined style={{
                  fontSize: '50px'
                }} />  
              </a>
            </Col>
            <Col className="social-bar" xs={{span: 12}} md={{span: 6}}>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gabepetersen">
                <GithubOutlined style={{
                  fontSize: '50px'
                }} />
              </a>
            </Col>
            <Col className="social-bar" xs={{span: 12}} md={{span: 6}}>
              <a target="_blank" rel="noopener noreferrer" href="mailto:gabeardenpetersen@gmail.com">
                <MailOutlined style={{
                  fontSize: '50px'
                }} />
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default About;