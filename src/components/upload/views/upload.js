import React, { Component } from "react";
import "./upload.css";

class Upload extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <label className="upload-wrapper">
        <p>点击上传，或将文件拖拽到此处</p>
        <input type="file" className="input-file" multiple />
      </label>
    );
  }
}

export default Upload;
