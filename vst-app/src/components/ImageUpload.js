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
          imagePreview = <img src={imagePreviewUrl} />;
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