import React, { Component } from 'react';
import Upload from '@/components/upload/upload';
import Clipboard from '@/components/clipboard/clipboard';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      type: localStorage.getItem('type'),
      typeList: localStorage.getItem('typeList')
    }
    this.onUpload = this.onUpload.bind(this);
  }

  onUpload(url){
    this.setState({
      url: url
    })
  }

  render() {
    return (
      <div className="container">
        <Upload onUpload={this.onUpload}/>
        <Clipboard url={this.state.url}/>
        
      </div>
    );
  }
}

export default App;
