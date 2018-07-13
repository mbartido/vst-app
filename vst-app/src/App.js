import React, { Component } from 'react';
import 'bootstrap';
import { Button, ButtonGroup, InputGroup, Input,
         Jumbotron } from 'reactstrap';
import { Stage, Layer, Image } from 'react-konva';
import './App.css';
import ImageUpload from './components/ImageUpload.js'
import ImageCanvas from './components/ImageCanvas.js'
import Modal from './components/Modal.js'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tshirt: null
    }
    this.tshirtColor = this.tshirtColor.bind(this)
  }
  
  // Changes current tshirt state to whatever color
  tshirtColor(color) {
    this.setState({
      tshirt: color
    })
  }

  // Changes the t shirt of the canvas
  // tshirtClick(color) {
  //   var canvas = document.getElementsByClassName('canvas')[0];
  //   if (canvas != null) {
  //     var ctx = canvas.getContext('2d');
  //     var img = document.getElementById(color);
  //     ctx.drawImage(img, 0, 0); 
  //   }
  // }

  // // Clears the canvas of all elements
  // clearCanvas() {
  //   var canvas = document.getElementsByClassName('canvas')[0];
  //   var ctx = canvas.getContext('2d');
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // }

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
        {/*****************************************/}

        <div class="wrapper">
          
          {/* Sidebar of page */}
          <nav id="sidebar">
            <div class="sidebar-header">
              <h3>Shirt Design</h3>
            </div>
  
            {/* Links or sections of the sidebar */}
            <ul class="list-unstyled components">  
            
              {/* <li class="active">
                <a href="#section1Submenu" data-toggle="collapse" aria-expanded="false">Shirt Color</a>
                <ul class="collapse list-unstyled" id="section1Submenu">
                  
                  <li><Button onClick={() => this.tshirtClick('white')}>White</Button></li>
                  <li><Button onClick={() => this.tshirtClick('black')}>Black</Button></li>
                  <li><Button onClick={this.clearCanvas}>Clear</Button></li> 

                </ul>
              </li> */}

              {/* Modal when page opens */}
              {/* Different colored tshirt option */}
              <li><Modal buttonLabel='Shirt Color' tshirtColor= {this.tshirtColor}/></li>
              
              {/* For uploading text to tshirt*/}
              <li><a>Text</a></li>

              {/* Uploading your design to tshirt*/}
              <li><a>Design</a></li>

            </ul>
          </nav>

          <div id="content" class="container-fluid">
            <div class="row">
              
              {/* Where tshirt pops up. The left side of the page next to sidebar. */}
              <div class="col-sm-9">
                {/* <canvas className="canvas" width="800" height="800">
                </canvas> */}
                {/* Canvas area where image and edits are displayed */}
                <Stage width="800" height="800">
                  <Layer>
                    <ImageCanvas tshirt={this.state.tshirt}/>
                  </Layer>
                </Stage>
              </div>
              
              {/* Where image uploaded is. The right side of the page.*/}
              <div class="col-sm-3" style={{backgroundColor: '#ebebef'}}>
                {/* <ImageUpload /> */}
              </div>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }

}

export default App;
