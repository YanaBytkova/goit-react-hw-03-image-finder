import React, { Component } from 'react';
import { StyledButton } from './StyledButton.styled';


export default class Button extends Component {
  render() {
    return (
       <StyledButton> 
            <button type="submit" className="Button" onClick={this.props.loadMoreHandler}>Load More</button>
        </StyledButton>
    );
  }
}
