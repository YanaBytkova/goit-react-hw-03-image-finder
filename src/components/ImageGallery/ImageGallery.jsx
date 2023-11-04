import React, { Component } from 'react';
import { StyledImageGallery } from './StyledImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export class ImageGallery extends Component {
  render() {
    return (
      <StyledImageGallery>
        <ul className="ImageGallery">
            <ImageGalleryItem images={this.props.images} openModal={this.props.openModal}/>
        </ul>
     </StyledImageGallery>
    );
  }
}
