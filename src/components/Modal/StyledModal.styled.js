import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${props =>
    props.specialLook ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  /* width: 100vw;
     height: 100vh; */
  &:hover {
    cursor: pointer;
  }
  /*
   * Стили компонента Modal
   */
  
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
  
  .Modal {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    padding: 50px;
  }
  .bigImage {
    max-width: calc(100vw - 96px);
    max-height: calc(100vh - 48px);
  }
`;