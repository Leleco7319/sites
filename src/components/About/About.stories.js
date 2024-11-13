import React from 'react';
import About from './About';
import { ParallaxProvider } from 'react-scroll-parallax';

export default {
  title: 'Components/About',
  component: About,
  args: {},
}

const Template = (args) => <ParallaxProvider><About {...args} /></ParallaxProvider>;

export const Story = Template.bind({});
Story.args = {};
