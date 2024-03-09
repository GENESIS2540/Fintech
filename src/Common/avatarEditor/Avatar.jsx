import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone';

class Avatar extends Component {
  constructor() {
    super();

    this.initialWidth = 300;
    this.initialHeight = 250;

    this.state = {
      width: this.initialWidth,
      height: this.initialHeight,
      rotate: 0,
      scale: 1,
      image: ''
    };

    this.set = this.setOption.bind(this);
    this.uploadFile = this.uploadFile.bind(this);

    this.image = null;
  }

  setOption(field, value) {
    if (field === 'ratio') {
      switch (value) {
        case '169': {
          this.setState({
            width: this.state.width, height: this.state.width * 0.5625
          });
          break;
        }

        case '11': {
          this.setState({
            width: this.state.width, height: this.state.width
          });
          break;
        }
      }
    }

    if (field === 'resize') {
      switch (value) {
        case 'logo': {
          this.setState({
            width: 400, height: 400
          });
          break;
        }

        case 'cover': {
          this.setState({
            width: 1920, height: 500
          });
          break;
        }
      }
    }

    if (field === 'flip') {
      switch (value) {
        case 'left': {
          this.setState({
            rotate: this.state.rotate - 90
          });
          break;
        }

        case 'right': {
          this.setState({
            rotate: this.state.rotate + 90
          });
          break;
        }
      }
    }

    if (field === 'zoom') {
      this.setState({
        scale: Number(value)
      });
    }
  }
  
  componentDidUpdate() {
    console.log(this.image)
    console.log(this.image.calculatePosition())
  }

  uploadFile(acceptedFiles) {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({ image: reader.result });
      };

      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
      <Dropzone
        multiple={false}
        onDropAccepted={this.uploadFile}
      >
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()} style={{width: '100%', height: '100%', border: '2px dashed #ccc'}}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select one</p>
        </div>
      )}
      </Dropzone>

      {this.state.image &&
      <div>
      <hr />
      <AvatarEditor
        disableDrop={true}
        style={{ cursor: 'drag' }}
        ref={e => this.image = e}
        image={this.state.image}
        width={this.state.width}
        height={this.state.height}
        border={0}
        scale={this.state.scale}
        rotate={this.state.rotate}
        onDropFile={e => console.log(e.target)}
      />
      <div>
        <button onClick={() => { this.set('ratio', '169') }}>Set 16/9 ratio</button>
        <button onClick={() => { this.set('ratio', '11') }}>Set 1/1 ratio</button>
        <button onClick={() => { this.set('flip', 'left') }}>Flip left</button>
        <button onClick={() => { this.set('flip', 'right') }}>Flip right</button>
        <br />
        <button onClick={() => { this.set('resize', 'logo') }}>Set as logo (400 x 400)</button>
        <button onClick={() => { this.set('resize', 'cover') }}>Set as cover (1920 x 500)</button>
        <br />
        Zoom: <input type="range" min="100" max="200" onChange={e => { const v = e.target.value / 100; this.set('zoom', v) }} />
      </div>
      </div>
      }
      </div>
    );
  }
}

export default Avatar;