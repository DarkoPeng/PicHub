import React, { Component } from 'react';
import './albumList.css';


class albumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumList: [{
        id: 0,
        type: 'qiniu',
        name: '七牛云',
        method: 'POST',
        apiUrl: '',
        payload: {},
      },{
        id: 1,
        type: 'weibo',
        name: '微博图床',
        method: 'POST',
        apiUrl: '',
        payload: {}
      },{
        id: 3,
        type: 'diy',
        name: '自定义叫啥名',
        method: 'POST',
        apiUrl: '',
        payload: {}
      }]
    }
  }

  render() {
    const { albumList } = this.state;
    
    return (
      <div className="sidebar">
        <ul className="album-list">
          {albumList.map(album => (
            <li className="album-item">{album.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default albumList;
