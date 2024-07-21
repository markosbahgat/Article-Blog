import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Header from './Header';
import {fireEvent, within} from '@storybook/test';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MobileMenuOpen = Template.bind({});
MobileMenuOpen.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const menuButton = await canvas.getByRole('button', {
    name: /open main menu/i,
  });
  fireEvent.click(menuButton);
};

export const DarkMode = Template.bind({});
DarkMode.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const darkModeButton = await canvas.getByText('Dark Mode');
  fireEvent.click(darkModeButton);
};
