import React from 'react';
import {Story} from '@storybook/react';
import {UncontrolRating} from './UncontrollRating';

export default {
    title: 'components/Rating',
    component: UncontrolRating
}

const Template: Story<{}> = (args) => <UncontrolRating/>

export const UserUncontrolRating = Template.bind({})
UserUncontrolRating.args = {}