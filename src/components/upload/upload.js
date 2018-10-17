import React, { Component } from "react";
import "./upload.css";

class Upload extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      linkUrl: ""
    };

    this.fileInput = React.createRef();

    this.dropFile = this.dropFile.bind(this);
    this.dragOverFile = this.dragOverFile.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  // 从本地文件夹拖拽上传
  dropFile(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.upload(ev.dataTransfer.files);
  }

  // drag
  dragOverFile(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  // 文件上传事件
  inputChange(ev){
    const inputNode = this.fileInput.current;
    const fileList = inputNode.files;
    this.upload(fileList)
  }

  upload(fileList){
    const data = new FormData();
    data.append('file', fileList[0]);

    fetch('https://ws-admin.watsons.com.cn/bossmanager/upload.do?jsontoken=eyJ1c2VyX2lkIjoyNzIsInVzZXJfdG9rZW4iOiI0ZjlhYWI5ODVjYTY0MjE0NWIzZDg2YTkxNTJjZjE3NyJ9.3be3dca49202d86211fbf4a0f3b1560d', {
      method: 'POST',
      body: data
    })
    .then(response => {
      response.json().then((body) => {
        this.setState({
          linkUrl: body.data.url
        })
        this.props.onUpload(body.data.url)
      })
    })
    .catch(error => console.error('Error', error));
  }

  render() {
    const { linkUrl } = this.state;
    return (
      <label className="upload-wrapper" onDrop={ev => this.dropFile(ev)} onDragOver={ev => this.dragOverFile(ev)}>
        <input type="file" className="input-file" ref={this.fileInput} onChange={ev => this.inputChange(ev)} />
        {linkUrl ? <img src={linkUrl} alt="" className="preview-img" /> : <p>点击上传，或将文件拖拽到此处</p>}
      </label>
    );
  }
}

export default Upload;
