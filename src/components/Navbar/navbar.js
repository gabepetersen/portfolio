import React from 'react';
import { Drawer, Button, Affix } from 'antd';
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
        <Affix className="menu-button" offsetTop={60} onChange={affixed => console.log(affixed)}>
          <Button type="primary" onClick={this.showDrawer}>Open</Button>
        </Affix>
        
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Top</p>
          <p>Works</p>
          <p>About / Contact</p>
        </Drawer>
      </div>
    );
  }
}

export default NavBar;

