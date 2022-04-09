import React from 'react';
import {Story} from '@storybook/react';
import {UncontrollAccordion, UncontrollAccordionType} from './UncontrollAccordion'
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/Accordion',
    component: UncontrollAccordion
}

const Template: Story<UncontrollAccordionType> = (args) => <UncontrollAccordion {...args}/>
export const UserUncontrolAccordion = Template.bind({})
UserUncontrolAccordion.args = {
    title: 'Users',
    items: [
        {title: 'Sasha', value: 1},
        {title: 'Kate', value: 2},
        {title: 'Illya', value: 3}
    ]
}