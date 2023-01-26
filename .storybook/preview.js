// import '../src/index.css'; css global
import { viewports } from './utils/viewports';
import React from 'react';

if (typeof jest === 'undefined') {
  // NOTES: Resolve storybook static file after built
  require('../src/App.scss');
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports,
    defaultViewport: 'DesktopBig',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <>
      <h1>layout storybook</h1>
      <Story />
    </>
  ),
];
