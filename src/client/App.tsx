/**
 * @module App.tsx
 * @description App Component
 */

import * as React from 'react';
import Footer from './footer/Footer';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <h1>Hello There Kind World!</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
