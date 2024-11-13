import React from 'react';

import Testimonials from './Testimonials';

export default {
  title: 'Components/Testimonials',
  component: Testimonials,
  args: {},
}

const Template = (args) => <Testimonials {...args} />;

export const Story = Template.bind({});
Story.args = {};
