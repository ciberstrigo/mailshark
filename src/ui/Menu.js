import React, { Component } from 'react';
import Head from './MenuHead.js'
import Side from './MenuSide.js'
import EditBar from './EditBar.js'
import { Dimmer } from 'semantic-ui-react'

class Menu extends Component
{
  constructor(props) {
    super(props)
    this.changeSidebarState = this.changeSidebarState.bind(this)

    this.state = {
      sidebarVisible: false,

    }
  }


  changeSidebarState() {
    this.setState({sidebarVisible: !this.state.sidebarVisible});
  }

  render() {
    const { sidebarVisible } = this.state

    return(
      <div>
          <Side sidebarVisible={sidebarVisible} onSidebarHamClick={this.changeSidebarState}/>
          <Dimmer.Dimmable dimmed={sidebarVisible} blurring>
            <Dimmer active={sidebarVisible} onClickOutside={this.changeSidebarState} />
            <Head onHamClick={this.changeSidebarState} />
            <EditBar />
          </Dimmer.Dimmable>
      </div>
    );
  }
}

export default Menu;