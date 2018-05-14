import React, { Component } from 'react';
import { Button, ButtonGroup, InputGroup, Input,
         Jumbotron } from 'reactstrap';
import './App.css';
import ImageUpload from './components/ImageUpload.js'

class App extends Component {
  
  // Changes the t shirt of the canvas
  tshirtClick(color) {
    var canvas = document.getElementsByClassName('canvas')[0];
    if (canvas != null) {
      var ctx = canvas.getContext('2d');
      var img = document.getElementById(color);
      ctx.drawImage(img, 0, 0); 
    }
  }

  // Clears the canvas of all elements
  clearCanvas() {
    var canvas = document.getElementsByClassName('canvas')[0];
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  render() {
    // So we can serve static t shirt images
    const white = require('./dist/img/white2.png');
    const black = require('./dist/img/black2.png');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VST</h1>
        </header>
       
        {/* T shirt images that are not displayed */}
        <div style={{display:'none'}}>
          <img id="white" src={white} alt="wat" />
        </div> 
        <div style={{display:'none'}}>
          <img id="black" src={black} alt="wat" />
        </div> 

        {/* Introduction to how to use website */}
        <div className="intro">
          <Jumbotron>
            <p>To get started please choose a shirt. Then, upload an image.
            The image will then be shown on the shirt and you can customize the design as you like.</p>
          </Jumbotron>
        </div>

        {/* Picking shirt color buttons */}
        <div className="shirtButtons">
          <ButtonGroup>
            <Button onClick={() => this.tshirtClick('white')}>White</Button>
            <Button onClick={() => this.tshirtClick('black')}>Black</Button>
            <Button onClick={this.clearCanvas}>Clear</Button>
          </ButtonGroup>
        </div>

        {/* Where user design is stored */}
        <canvas className="canvas" width="500" height="500">
        </canvas>

        {/* Where images are uploaded to canvas */} 
        <ImageUpload />

      </div>
    );
  }

}

export default App;
