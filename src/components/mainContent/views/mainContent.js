import React from 'react';

class MainContent extends React.Component {
  
  constructor(props){
    super(props);

    this.type = 'diy';
  }

  render(){
    return (
      <main>
        我是主要内容
      </main>
    )
  }
}

export default MainContent
