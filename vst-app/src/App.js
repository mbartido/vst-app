import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './App.css';

class App extends Component {
  
  tshirtClick() {
    var canvas = document.getElementsByClassName('canvas')[0];
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('source');
    ctx.drawImage(img, 0, 0);
  }

  clearCanvas() {
    var canvas = document.getElementsByClassName('canvas')[0];
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VST</h1>
        </header>
       
        <div style={{display:'none'}}>
          <img id="source" src="https://www.nationwideschooluniforms.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/p/l/plain_white_tshirt.png" alt="wat" />
        </div> 
         
        <div className="shirtButtons">
          <ButtonGroup>
            <Button onClick={this.tshirtClick}>Shirt 1</Button>
            <Button onClick={this.clearCanvas}>Shirt 2</Button>
            <Button>Shirt 3</Button>
          </ButtonGroup>
        </div>

        <canvas className="canvas" width="800" height="800">
        </canvas>

      </div>
    );
  }

}

export default App;
