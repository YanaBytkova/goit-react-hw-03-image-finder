import React, { Component } from 'react';
import { StyledSearchbar } from './StyledSearchbar.styled';



export class Searchbar extends Component {
    state = {
        word: '',
    };
    handleSubmit = event => {
        event.preventDefault();
        const word = this.state.word;
        this.props.onSubmit(word);
 
      };
      handleInputChange = event => {
        const value = event.target.value;
        this.setState({
          word: value,
        });
        // console.log("word", this.state.word);
      };
  render() {
    return (
      <StyledSearchbar>
         <header className="searchbar">
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>&#128270;
        </button>
    
        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={this.handleInputChange}
        />
      </form>
    </header>
 </StyledSearchbar>
    );
  }
}
