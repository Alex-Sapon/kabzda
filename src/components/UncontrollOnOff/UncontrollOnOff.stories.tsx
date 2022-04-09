import React from 'react'
import {UncontrolOnOff, UncontrolOnOffType} from './UncontrollOnOff';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/OnOff',
    component: UncontrolOnOff
}

const Template: Story<UncontrolOnOffType> = (args) => <UncontrolOnOff {...args}/>
export const UserUncontrolOnOff = Template.bind({})
UserUncontrolOnOff.args = {
    click: true,
    onClick: action('On or Off clicked')
}



