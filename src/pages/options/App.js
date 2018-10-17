import React, { Component } from 'react';
import {view as AlbumList} from '@/components/albumList';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container">
        <header>PicHub 配置</header>
        <main className="content">
          <AlbumList/>
        </main>
      </div>
    )
  }
}

export default App;
