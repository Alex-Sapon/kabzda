import React from 'react';
import {Story} from '@storybook/react';
import {ControlAccordion, ControlAccordionType} from './ControlAccordion';

export default {
    title: 'components/ControlAccordion',
    component: ControlAccordion,
    argsType: {
        color: {
            control: 'color',
            table: {
                category: 'Events'
            }
        }
    }
}

const Template: Story<ControlAccordionType> = (args) => <ControlAccordion {...args}/>
export const UserControlAccordion = Template.bind({})
UserControlAccordion.args = {
    title: 'Menu',
    collapsed: true
}

