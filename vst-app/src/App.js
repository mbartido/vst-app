import React, { Component } from 'react';
import { Button, ButtonGroup, InputGroup, Input} from 'reactstrap';
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
    const white = require('./dist/img/white.png');
    const black = require('./dist/img/black.png');
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VST</h1>
        </header>
       
        {/* T shirt images */}
        <div style={{display:'none'}}>
          <img id="white" src={white} alt="wat" />
        </div> 

        <div style={{display:'none'}}>
          <img id="black" src={black} alt="wat" />
        </div> 

        <div className="shirtButtons">
          <ButtonGroup>
            <Button onClick={() => this.tshirtClick('white')}>Shirt 1</Button>
            <Button onClick={() => this.tshirtClick('black')}>Shirt 2</Button>
            <Button onClick={this.clearCanvas}>Shirt 3</Button>
          </ButtonGroup>
        </div>

        <canvas className="canvas" width="800" height="800">
        </canvas>

        <ImageUpload />
      </div>
    );
  }

}

export default App;
