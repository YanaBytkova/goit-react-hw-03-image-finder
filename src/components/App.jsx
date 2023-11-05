import { Component } from 'react';
import axios from 'axios';
import {API_URL, API_KEY } from './config';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    images: null,
    totalHits: null,
    word: '',
    isLoading: false,
    error: null,
    page: 1,
    modalData: null,
  }
  
  onSubmit = (word) => {
    const searchWord = word;
    this.setState({word: searchWord});
    // console.log(this.state.word);
    
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
      const page = this.state.page;
      const { data } = await axios.get(`${API_URL}?q=${word}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      this.setState({
        images: data.hits,
        totalHits: data.totalHits,
      });
      if (this.state.totalHits = "0") {
        alert(`...Images with word ${word} not found! Please, enter new word!`);
      }
      
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };
  fetchImagesMore = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const word = this.state.word;
      const page = this.state.page;
      const { data } = await axios.get(`${API_URL}?q=${word}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      if (page === Math.floor(this.state.totalHits / 12)) {
        alert(`...You viewed all images with ${word}! Please, enter new word!`);
      }
      
      if (this.state.images !== null) {
        const addImages = 
          data.hits;
        this.setState(prevState => ({
          images: prevState.images.concat(addImages),
        }));
        
      }
      
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
    if (prevState.page !== this.state.page) {
      this.fetchImagesMore();
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
  loadMoreHandler = () => {
    this.setState({
      page: this.state.page + 1,
    });
    
  }

  render() {
  return (
    <StyledApp
    >
      <Searchbar onSubmit={this.onSubmit}/>
      {this.state.isLoading && <Loader />}
      {this.state.images !== null && <ImageGallery images={this.state.images} openModal={this.openModal} />}
      {((this.state.totalHits > 12) && (this.state.page !== Math.floor(this.state.totalHits / 12))) && <Button loadMoreHandler={this.loadMoreHandler} />}
      {this.state.isOpenModal && (
          <Modal
            closeModal={this.closeModal}
            modalData={this.state.modalData}
          />
        )}
    </StyledApp>
  )};

}
