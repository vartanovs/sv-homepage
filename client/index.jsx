/**
 * @module client/index.jsx
 * @description Application Entry Point. Hang Root App off #root in index.html
 */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>Hello There Kind World!</h1>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
