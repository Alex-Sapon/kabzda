import React from 'react'
import {Story} from '@storybook/react';
import {ControlOnOff, ControlOnOffType} from './ControlOnOff';

export default {
    title: 'components/ControlOnOff',
    component: ControlOnOff
}

const Template: Story<ControlOnOffType> = (args) => <ControlOnOff {...args}/>

export const UserControlOnOf = Template.bind({})
UserControlOnOf.args = {
    clicked: false
}