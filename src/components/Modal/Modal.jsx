import React, { Component } from 'react';

import { StyledModal } from './StyledModal.styled';

export default class Modal extends Component {
//   state = {
//     counter: 1,
//   };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'auto';
  }

//   handleIncrementProduct = () => {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }));
//   };

  handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <StyledModal >
        <div className="Overlay" onClick={this.handleOverayClick}>
            <div className="Modal">
                <img src={this.props.modalData} alt="" className="bigImage"/>
            </div>
        </div>
      </StyledModal>
    );
  }
}