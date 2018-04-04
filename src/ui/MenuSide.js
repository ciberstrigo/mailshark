import React, { Component } from 'react';
import { Menu, Button, Sidebar } from 'semantic-ui-react'



class Side extends Component
{
  constructor(props) {
    super(props);

    this.onSidebarHamClick = this.onSidebarHamClick.bind(this);
    this.state = { 
        sidebarVisible: false,
    }
  }

  onSidebarHamClick(e) {
    this.props.onSidebarHamClick();  
  }

  render() {
    return(
        <Sidebar as={Menu} animation='overlay' width='thin' visible={this.props.sidebarVisible} vertical inverted left>
            <Menu.Item name='hide'>
                <Button onClick={this.onSidebarHamClick} basic inverted icon='bars' />
            </Menu.Item>
        </Sidebar>
    )
  }
}

export default Side;