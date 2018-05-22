import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';

class ImageCanvas extends React.Component {
    state = {
        image: null
    };

    componentDidMount() {
        const image = new window.Image();
        image.src = "http://konvajs.github.io/assets/yoda.jpg";
        image.onload = () => {
            // set state will redraw layer because 
            // image prop is changed
            this.setState({
                image: image
            });
        };
    }

    render() {
        return <Image image={this.state.image} />;
    }
}

export default ImageCanvas;