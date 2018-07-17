import React, { Component } from 'react';
import { Stage, Layer, Image } from 'react-konva';

class ImageUpload2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        const image = new window.Image();
        image.src = "https://konvajs.github.io/assets/yoda.jpg";
        image.onload = () => {
            this.setState({
                image: image,
            });
        };
    }

    render() {
        return <Image image={this.state.image} draggable="true"/>;
    }
}

export default ImageUpload2;