import React, { Component } from 'react';
import { Menu, Icon, Dropdown, Button, Sidebar, Segment, Image, Header, Accordion, Container   } from 'semantic-ui-react'


var fontOptions = [
    {
        text: 'Arial',
        value: 'arial'
    },
    {
        text: 'Times',
        value: 'times'
    },
    {
        text: 'Helvetica',
        value: 'helvetica'
    }                
]

var sizeOptions = [
    {
        text: '8',
        value: '8'
    },
    {
        text: '12',
        value: '12'
    },
    {
        text: '14',
        value: '14'
    },
    {
        text: '16',
        value: '16'
    },
    {
        text: '20',
        value: '20'
    }

]

var fontPlaceholder = 'Font...'
var sizePlaceholder = 'Size...'

class EditBar extends Component {

    

    render() {
        return(
        <div>
            <Container>
                {/*   search*/}
                <Dropdown placeholder={sizePlaceholder} search selection compact options={fontOptions} />
                {' '}
                <Dropdown placeholder={fontPlaceholder} search selection compact options={sizeOptions} />
                <Button.Group basic>
                <Button icon>
                    <Icon name='align left' />
                </Button>
                <Button icon>
                    <Icon name='align center' />
                </Button>
                <Button icon>
                    <Icon name='align right' />
                </Button>
                <Button icon>
                    <Icon name='align justify' />
                </Button>
                </Button.Group>
                {' '}
                <Button.Group basic>
                <Button icon>
                    <Icon name='bold' />
                </Button>
                <Button icon>
                    <Icon name='underline' />
                </Button>
                <Button icon>
                    <Icon name='italic' />
                </Button>
                </Button.Group>
            </Container>
        </div>
        )
    }
}

export default EditBar;