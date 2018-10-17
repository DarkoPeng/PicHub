import React, { Component } from 'react';
import  AlbumList from '@/components/albumList/albumList';
import  MainContent from '@/components/mainContent/mainContent'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      id: 0
    }

  }

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
