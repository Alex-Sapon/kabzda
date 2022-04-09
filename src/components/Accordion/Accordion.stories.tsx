import React from 'react';
import {Story} from '@storybook/react';
import {Accordion, AccordionType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/Accordion',
    component: Accordion
}

const callBack = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    items: [
        {title: 'Home', value: 1},
        {title: 'Users', value: 2},
        {title: 'Settings', value: 3}
    ],
    onClick: () => action('some item was clicked')
}

export const UserUncollapsedMode = Template.bind({})
UserUncollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    items: [
        {title: 'Sasha', value: 1},
        {title: 'Kate', value: 2},
        {title: 'Illya', value: 3}
    ],
    onClick: () => action('some item was clicked')
}



