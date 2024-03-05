import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { createPortal } from "react-dom";
const StyledModal = styled.div`
  z-index: 2000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 2rem 0;
  height: 80vh;
  overflow-y: auto;

  & svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;

    &:hover {
      color: var(--color-indigo-700);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const Container = styled.div`
  overflow-y: auto;
`;
export default function Modal({ children, onClose }) {
  return createPortal(
    <Container>
      <Overlay onClick={onClose} />
      <StyledModal>
        <IoCloseSharp onClick={onClose} />
        {children}
      </StyledModal>
    </Container>,
    document.body
  );
}
