import React from 'react';
import {Story} from '@storybook/react';
import {Rating, RatingType} from './Rating';

export default {
    title: 'components/Rating',
    component: Rating
}

const Template: Story<RatingType> = (args) => <Rating {...args}/>

export const UserRating = Template.bind({})
UserRating.args = {
    star: 5,
    value: 4
}


