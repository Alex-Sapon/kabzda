import React, {useState} from 'react'
import {Story} from '@storybook/react';
import {OnOff, OnOffType} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/OnOff',
    component: OnOff
}

const Template: Story<OnOffType> = (args) => <OnOff {...args}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)

    return <OnOff click={value} onClick={action('On or Off clicked')}/>
}

export const UserOnOff = Template.bind({})
UserOnOff.args = {
    click: true,
    onClick: action('On or Off clicked')
}
