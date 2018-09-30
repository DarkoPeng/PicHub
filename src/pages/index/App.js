import React, { Component } from 'react';
import { view as Upload } from '@/components/upload';
import { view as Clipboard } from '@/components/clipboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Upload/>
        <Clipboard/>
      </div>
    );
  }
}

export default App;
