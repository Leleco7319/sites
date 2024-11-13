import React from 'react';

import TestimonialBox from './TestimonialBox';

export default {
  title: 'Components/TestimonialBox',
  component: TestimonialBox,
  args: {},
}

const Template = (args) => <TestimonialBox {...args} />;

export const Story = Template.bind({});
Story.args = {};
