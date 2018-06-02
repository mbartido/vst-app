import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image } from 'react-konva';
import white from './../dist/img/white.png';
import black from './../dist/img/black.png';
import ColorPick from './ColorPick.js';

class ImageCanvas extends React.Component {
    constructor(props) {
        super(props);
        // tshirt will be stored as an image object 
        this.state = {
            tshirt: null
        }
    }

    componentDidMount() {
        const image = new window.Image();
        if (this.props.color == 'white') {
            image.src = white;
        } else if (this.props.color == 'black') {
            image.src = black;
        } else {
            image.src = null;
        }
        image.onload = () => {
            // set state will redraw layer because 
            // image prop is changed
            this.setState({
                tshirt: image
            });
        };
    }

    // So we can check when tshirt changes
    componentWillReceiveProps(nextProps) {
        if (nextProps.tshirt == 'black') {
            const image = new window.Image();
            image.src = black;
            image.onload = () => {
                this.setState({
                    tshirt: image
                })
            }
        } else if (nextProps.tshirt == 'white') {
            const image = new window.Image();
            image.src = white;
            image.onload = () => {
                this.setState({
                    tshirt: image
                })
            }
        } else {
            const image = new window.Image();
            image.src = white;
            image.onload = () => {
                this.setState({
                    tshirt: null
                })
            }
        }

    }

    render() {
        return (
            <Image image={this.state.tshirt} />

        )
    }
}

export default ImageCanvas;