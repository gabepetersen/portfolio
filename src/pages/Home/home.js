// External Components
import React from 'react';
import { Row, Col, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

// My styles
import './home.css';

// My components
import Header from '../../components/Header/header';
import Tab from '../../components/Tab/tab';
import About from '../../components/About/about';
import tabData from '../../static/tabData';
import NavBar from '../../components/Navbar/navbar';


/* scroll={el => el.scrollIntoView({
  behavior: 'smooth',
})}

*/
class Home extends React.Component {
  render() {
    return (
      <>
          <div id="top" className="header-container">
            {/* Navigation Bar in Here */}
            <Row justify="end" align="middle">
              <Col>
                <NavBar />
              </Col>
            </Row>
            
            {/* Header content in here */}
            <Row className="header-row" justify="center" align="middle">
              <Header />
            </Row>

            {/* Blinking Down Arrow */}
            <Row justify="center" align="middle">
              <Router>
                <Link className="down-arrow" smooth to="#works" > 
                  <DownOutlined style={{
                      fontSize: '30px'
                    }}/>
                </Link>
              </Router>
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

          {/* About Data in here */}
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