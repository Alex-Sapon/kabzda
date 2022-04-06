import React from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingType} from './Rating';

export default {
    title: 'components/Rating',
    component: Rating
}

const Template: Story<RatingType> = (args) => <Rating {...args}/>

export const UserControlRating = Template.bind({})
UserControlRating.args = {
    star: 5,
    value: 4
}


