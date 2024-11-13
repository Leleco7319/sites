import React from 'react';
import FormHome from './FormHome';


export default {
  title: 'Components/FormHome',
  component: FormHome,
  args: {},
}

const Template = (args) => <FormHome {...args} />;

export const Story = Template.bind({});
Story.args = {};
