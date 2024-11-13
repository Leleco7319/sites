import React from 'react';

import SlideCarousel from './SlideCarousel';

export default {
  title: 'Components/SlideCarousel',
  component: SlideCarousel,
  args: {},
}

const Template = (args) => <SlideCarousel {...args} />;

export const Story = Template.bind({});
Story.args = {};
