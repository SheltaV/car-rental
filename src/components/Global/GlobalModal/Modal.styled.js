import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  padding: 40px 12px 24px 12px;
  border-radius: 24px;
  background-color: ${({ theme: { colors } }) => colors.primaryWhite};
  padding: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 16px;
  right: 16px;
`;