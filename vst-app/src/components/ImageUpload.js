import React, { Component } from 'react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
      this.state = {
         file: '', imagePreviewUrl: ''
      };
   }

  imageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
   }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;

    if (imagePreviewUrl) {
      imagePreview = <img src={imagePreviewUrl} id="uploadPic"/>;

      var canvas = document.getElementsByClassName('canvas')[0];
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, img.width, img.height, canvas.width/2 - 75, 
                      canvas.height/2 - 150, 150, 150 * img.height/img.width);
      };
            img.src = imagePreviewUrl;
    } else {
      imagePreview = <div className="previewText">Please select an image.</div>;
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this.submit(e)}>
          <input className="fileInput" type="file"
            onChange={(e) => this.imageChange(e)} />
        </form>
        <div className="imgPreview">
            {imagePreview}
        </div>   
      </div>
    );
  }
}

export default ImageUpload;