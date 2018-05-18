import React, { Component } from 'react';
import 'bootstrap';
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

        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Sidebar</h3>
            </div>
  
            {/* Links */}
            <ul class="list-unstyled components">
            
              <li class="active">
                <a href="#section1Submenu" data-toggle="collapse" aria-expanded="false">Shirt Color</a>
                <ul class="collapse list-unstyled" id="section1Submenu">
                  <li><Button onClick={() => this.tshirtClick('white')}>White</Button></li>
                  <li><Button onClick={() => this.tshirtClick('black')}>Black</Button></li>
                  <li><Button onClick={this.clearCanvas}>Clear</Button></li>
                </ul>
              </li>

              <li><a href="#">Section 3</a></li>

            </ul>
          </nav>

          <div id="content">
            <div class="row">
              <div class="col-md-9 col-lg-9">
                <canvas className="canvas" width="800" height="800">
                </canvas>
              </div>
              <div class="col-md-3 col-lg-3">
                <ImageUpload />
              </div>
            </div>
          </div>
        
        </div>

      </div>
    );
  }

}

export default App;
