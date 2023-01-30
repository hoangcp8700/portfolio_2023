// import '../src/index.css'; css global
import { viewports } from './utils/viewports';
import React from 'react';
import Layout from '../src/components/templates/Layout';

if (typeof jest === 'undefined') {
  // NOTES: Resolve storybook static file after built
  require('../src/App.scss');
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports,
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
    <div style={{ backgroundColor: '#d2d3c3' }}>
      {/* <h1>layout storybook</h1> */}
      <Layout>
        <Story />
      </Layout>
    </div>
  ),
];
