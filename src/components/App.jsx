import { Component } from 'react';
import {API_URL, API_KEY } from './config';
// import { nanoid } from 'nanoid';
// import { Searchbar, ImageGallery, ImageGalleryItem, Button, Loader } from 'components';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
// import Loader from './Loader/Loader';

import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    word: '',
    isLoader: false,
    error: null,
  }

  onSubmit = (word) => {
    const searchWord = word;
    this.setState({word: searchWord});
    console.log(this.state.word);
    
  };


  render() {
  return (
    <StyledApp
    >
      <Searchbar onSubmit={this.onSubmit}/>
      <ImageGallery />
    </StyledApp>
  )};

}
