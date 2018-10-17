import React, { Component } from "react";
import "./clipboard.css";

class Clipboard extends Component {
  constructor(props) {
    super(props);
    this.linkInput = React.createRef();
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard() {
    const inputNode = this.linkInput.current;
    inputNode.select();
    document.execCommand('copy') && document.execCommand('copy')
  }

  render() {
    return (
      <div className="clipboard">
        <p className="link">图片链接：</p>
        <input type="text" className="input-link" ref={this.linkInput} value={this.props.url} readOnly />
        <button className="button-copy" onClick={this.copyToClipboard}>
          点击复制
        </button>
      </div>
    );
  }
}

export default Clipboard;
