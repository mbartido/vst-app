import React, { Component } from 'react';
import ImageCanvas from './ImageCanvas.js'
import { Stage, Layer, Image, KonvaContainerComponent } from 'react-konva';

class ImageDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
    }


    componentDidMount() {
        const image = new window.Image();
        image.src = "http://www.pngonly.com/wp-content/uploads/2017/06/Cartoon-PNG-Mickey-Mouse.png";
        image.onload = () => {
            this.setState({
                image: image,
            });
        };
    }
    
    // So we can check when design changes
    componentWillReceiveProps(nextProps) {
       const image = new window.Image();
       image.src = nextProps.designUrl;
       image.onload = () => {
           this.setState({
               image: image
           })
       }
    
    }

    render() {
        return <Image image={this.state.image} draggable="true"/>;
    }
}

export default ImageDisplay;