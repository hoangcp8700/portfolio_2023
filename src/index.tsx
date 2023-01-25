import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const Element = document.getElementById('root');
if (Element) {
  const root = ReactDOM.createRoot(Element);
  root.render(<App />);
}
