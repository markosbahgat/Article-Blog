// src/stories/Footer.stories.tsx

import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Footer from './Footer'; // Adjust the import path based on your project structure

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
