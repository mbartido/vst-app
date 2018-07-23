import React, { Component } from 'react';
import 'bootstrap';
import { Button, ButtonGroup, InputGroup, Input,
         Jumbotron } from 'reactstrap';
import { Stage, Layer, Image, KonvaContainerComponent } from 'react-konva';
import './App.css';
import FileUpload from './components/FileUpload.js'
import ImageUpload from './components/ImageUpload.js'
import ImageCanvas from './components/ImageCanvas.js'
import ImageDisplay from './components/ImageDisplay.js'
import Modal from './components/Modal.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tshirt: null,
      designUrl: null
    }
    this.tshirtColor = this.tshirtColor.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  
  // Changes current tshirt state to whatever color
  tshirtColor(color) {
    this.setState({
      tshirt: color
    })
  }

  // Changes current user design to uploaded image
  changeImage(image) {
    this.setState({
      designUrl: image
    })
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
              <li><Modal buttonLabel='Shirt Color' tshirtColor={this.tshirtColor}/></li>
              
              {/* For uploading text to tshirt*/}
              <li><a>Text</a></li>

              {/* Uploading your design to tshirt*/}
              {/* <li><a>Design</a></li> */}

            </ul>
          </nav>

          <div id="content" class="container-fluid">
            <div class="row">
              
              {/* Where tshirt pops up. The left side of the page next to sidebar. */}
              <div class="col-sm-9 tshirt" align="center">
                {/* Canvas area where image and edits are displayed */}
                <Stage width="800" height="800">
                  <Layer>
                    <ImageCanvas tshirt={this.state.tshirt} />
                    <ImageDisplay designUrl={this.state.designUrl}/>
                  </Layer>
                </Stage>

              </div>

              {/* Where image uploaded is. The right side of the page.*/}
              <div class="col-sm-3" style={{backgroundColor: '#ebebef'}}>
                {/* <ImageUpload /> */}
                <FileUpload changeImage={this.changeImage}/>
              </div>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }

}

export default App;
