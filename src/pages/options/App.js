import React, { Component } from 'react';
import {view as AlbumList} from '@/components/albumList';
import {view as MainContent} from '@/components/mainContent'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="container">
        <header>PicHub 配置</header>
        <main className="content">
          <AlbumList/>
          <MainContent/>
        </main>
      </div>
    )
  }
}

export default App;
