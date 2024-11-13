import React from 'react';

import ServiceContainer from './ServiceContainer';

export default {
  title: 'Components/ServiceContainer',
  component: ServiceContainer,
  args: {},
}

const Template = (args) => <ServiceContainer {...args} />;

export const Story = Template.bind({});
Story.args = {};
