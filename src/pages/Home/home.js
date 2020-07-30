import React from 'react';
import { Row, Col, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './home.css';

import Header from '../../components/Header/header';
import Tab from '../../components/Tab/tab';
import About from '../../components/About/about';
import tabData from '../../static/tabData';
import NavBar from '../../components/Navbar/navbar';


class Home extends React.Component {
  render() {
    return (
      <>
          <div id="top" className="header-container">
            <Row justify="end" align="middle">
              <Col>
                <NavBar />
              </Col>
            </Row>
            
            <Row className="header-row" justify="center" align="middle">
              <Header />
            </Row>
            <Row className="down-arrow" justify="center" align="middle">
              <DownOutlined style={{
                  fontSize: '30px'
                }}/>
            </Row>
          </div>

          {/* Puts all the Tab Data (Work Experience) in Rows with unique justification */} 
          <div id="works">
          {tabData.map((item, key) => {
            let or = 'start'
            if(item.justify === "right") {
              or = 'end';
            }
            return (
              <>
                <Divider><h2>{item.title}</h2></Divider>
                <Row key={key} justify={or} className="tab-row" align="middle">
                  <Tab key={key} data={item}/>
                </Row>
              </>
            );
          })}
          </div>

          <div id="about">
          <Row className="about-container" justify="center" align="middle">
            <About id="#about" />
          </Row>
          </div>
      </>
    );
  }
}

export default Home;