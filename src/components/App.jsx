import { Component } from 'react';
import axios from 'axios';
import {API_URL, API_KEY } from './config';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    word: '',
    isLoading: false,
    error: null,
    page: 1,
    modalData: null,
  }
  
  onSubmit = (word) => {
    const searchWord = word;
    this.setState({word: searchWord});
    console.log(this.state.word);
    
  };

  
  // onSelecImageUrl = imageUrl => {
  //   this.setState({
  //     largeURL: imageUrl,
  //   });
  // };

  fetchImages = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const word = this.state.word;
      // console.log(word, API_KEY, API_URL);
      const { data } = await axios.get(`${API_URL}?q=${word}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({
        images: data.hits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.word !== this.state.word) {
      this.fetchImages();
    }
  }
  openModal = imageUrl => {
    this.setState({
      isOpenModal: true,
      modalData: imageUrl,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      modalData: null,
    });
  };

  // componentDidMount() {
    
  //   this.fetchImages();
  // }
  render() {
  return (
    <StyledApp
    >
      <Searchbar onSubmit={this.onSubmit}/>
      {this.state.isLoading && <Loader />}
      {this.state.images !== null && <ImageGallery images={this.state.images} openModal={this.openModal} />}
      {this.state.isOpenModal && (
          <Modal
            closeModal={this.closeModal}
            modalData={this.state.modalData}
          />
        )}
    </StyledApp>
  )};

}
