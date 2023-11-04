import React, { Component } from 'react';
import { StyledImageGalleryItem } from './StyledImageGalleryItem.styled';


export class ImageGalleryItem extends Component {
  // state ={
  //   largeURL: '',
  // }
  // onSelecImageUrl = imageUrl => {
  //   this.setState({
  //     largeURL: imageUrl,
  //   });
  // };
  render() {
    return (
      this.props.images.map(image => (
                <StyledImageGalleryItem key={image.id}>
                  <li key={image.id} className="ImageGalleryItem" onClick={() => this.props.openModal(image.largeImageURL)}>
                    <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image"/>
                  </li>
                </StyledImageGalleryItem>
    )));
  }
}


// export const ImageGalleryItem = ({ images } ) => (
  
//       images.map(image => (
//         <StyledImageGalleryItem>
//           <li key={image.id} className="ImageGalleryItem" onClick={() => this.onSelecImageId(image.largeImageURL)}>
//             <img src={image.webformatURL} alt={image.tags} className="ImageGalleryItem-image"/>
//           </li>
//         </StyledImageGalleryItem>
    
  
//   ))
          
          
// );
