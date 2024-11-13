import React from 'react';
import Partners from './Partners';

export default {
  title: 'Components/Partners',
  component: Partners,
  args: {},
}

const Template = (args) => <Partners {...args} />;

export const Story = Template.bind({});
Story.args = {};
