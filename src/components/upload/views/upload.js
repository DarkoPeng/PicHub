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
  }

  // 从本地文件夹拖拽上传
  dropFile(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log(ev.dataTransfer.files);
    this.setState({
      linkUrl: URL.createObjectURL(ev.dataTransfer.files[0])
    });
  }

  dragOverFile(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  render() {
    const { linkUrl } = this.state;
    return (
      <label className="upload-wrapper" onDrop={ev => this.dropFile(ev)} onDragOver={ev => this.dragOverFile(ev)}>
        <input type="file" className="input-file" ref={this.fileInput} />
        {linkUrl ? <img src={linkUrl} alt="" className="preview-img" /> : <p>点击上传，或将文件拖拽到此处</p>}
      </label>
    );
  }
}

export default Upload;
