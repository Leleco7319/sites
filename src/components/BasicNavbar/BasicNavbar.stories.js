import React from 'react';
import BasicNavbar from './BasicNavbar';


export default {
  title: 'Components/BasicNavbar',
  component: BasicNavbar,
  args: {},
}

const Template = (args) => <BasicNavbar {...args} />;

export const Story = Template.bind({});
Story.args = {};
