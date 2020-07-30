import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { Drawer, Button, Affix } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import './navbar.css';

class NavBar extends React.Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Affix className="menu-button" offsetTop={20} onChange={affixed => console.log(affixed)}>
          <Button style={{height: '40px'}} onClick={this.showDrawer}>
            <AlignRightOutlined style={{
              fontSize: '30px',
              color: '#666'
            }} />
            </Button>
        </Affix>
        
        <Drawer
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Router>
            <div>
              <ul class="nav-main">
                <li>
                  <Link className="menu-link" smooth to="#top">Top</Link>
                </li>
                <li>
                  <Link className="menu-link" smooth to="#works">Works</Link>
                </li>
                <li>
                  <Link className="menu-link" smooth to="#about">Contact</Link>
                </li>
              </ul>
            </div>
          </Router>
          
        </Drawer>
      </div>
    );
  }
}

export default NavBar;

