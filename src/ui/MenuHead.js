import React, { Component } from 'react';
import { Menu, Icon, Dropdown, Button } from 'semantic-ui-react'


function MakeDropDowm(props) {
  const submenu = props.submenu;
  const name = props.name;
  const listItems = submenu.map((item) => {
    switch(item.type) {
      case 'item':
        return(<Dropdown.Item onClick={item.onClick}>{item.name}</Dropdown.Item>);
      case 'divider':
        return(<Dropdown.Divider />);
      case 'header':
        return(<Dropdown.Header>{item.name}</Dropdown.Header>);
    }
  }
  );
  return (
    <Dropdown item text={name}>
      <Dropdown.Menu>
        {listItems}
      </Dropdown.Menu>
    </Dropdown>
  )
}

function logOut() {

}


class Head extends Component {

  constructor(props) {
    super(props)
    this.onHamClick = this.onHamClick.bind(this);
  }

  onHamClick(e) {
    this.props.onHamClick();  
  }

  render() {
    return (
      <div>
        <Menu>
          <Menu.Item name='logo' >
            <Button basic icon='bars' onClick={this.onHamClick}/>
          </Menu.Item>
          {/* <Dropdown item text='Файл'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <span className='text'>New</span>
                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                  <Dropdown.Item>Image</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item>Edit Permissions</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <MakeDropDowm name='Файл' submenu={[
            {
              type: 'item',
              name: 'Cоздать',
              onClick: function() {}
            },
            {
              type: 'item',
              name: 'Открыть',
              onClick: function() {}
            },   
            {
              type: 'item',
              name: 'Сохранить',
              onClick: function() {}
            },
            {
              type: 'divider'
            },
            {
              type: 'header',
              name: 'Экспортировать'
            },
            {
              type: 'item',
              name: 'Отправить...',
              onClick: function() {}
            },                           
          ]} />

          <Dropdown item text='Правка'>
            <Dropdown.Menu>
              <Dropdown.Item>Отменить</Dropdown.Item>
              <Dropdown.Item>Повторить</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Вырезать</Dropdown.Item>
              <Dropdown.Item>Копировать</Dropdown.Item>
              <Dropdown.Item>Вставить</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Найти</Dropdown.Item>
              <Dropdown.Item>Заменить</Dropdown.Item>            
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position='right'>
            <Menu.Item name='signup' >
              <Icon name='user circle' size='large' alt='user' />Leonid Averianov
            </Menu.Item>

            <Menu.Item name='help' >
              <Icon name='log out' size='large' alt='log out' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

      </div>
    )
  }
}


export default Head;