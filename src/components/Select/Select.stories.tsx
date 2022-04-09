import React from 'react';
import {Select, SelectType} from './Select';
import {Story} from '@storybook/react';

export default {
    title: 'components/Select',
    component: Select
}

const Template: Story<SelectType> = (args) => <Select {...args}/>
export const CustomSelect = Template.bind({})
CustomSelect.args = {
    items: [
        {title: 'none', value: 1},
        {title: 'Minsk', value: 2},
        {title: 'Moscow', value: 3},
        {title: 'Kiev', value: 4},
        {title: 'London', value: 5}
    ],
}