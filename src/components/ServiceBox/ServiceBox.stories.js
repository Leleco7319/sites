import React from 'react';
import ServiceBox from './ServiceBox';

export default {
  title: 'Components/ServiceBox',
  component: ServiceBox,
  args: {},
}

const Template = (args) => <ServiceBox {...args} />;

export const Story = Template.bind({});
Story.args = {};
