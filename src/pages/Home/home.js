import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

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
        <Layout>

          <Row justify="end" align="middle">
            <Col>
              <NavBar />
            </Col>
          </Row>
          
          <Row justify="space-around" align="middle">
            <Header />
          </Row>
               
          {tabData.map((item, key) => {
            let or = 'start'
            if(item.justify === "right") {
              or = 'end';
            }
            return (
              <Row justify={or} className="tab-row" align="middle">
                <Tab key={key} data={item}/>
              </Row>
            );
          })}

          <Row justify="space-around" align="middle">
            <About id="#about" />
          </Row>

        </Layout>
      </>
    );
  }
}

export default Home;