import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { createPortal } from "react-dom";
import { createContext, useCallback, useContext, useState } from "react";
import useClickOutsideModal from "../hooks/useClickOutsideModal";
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
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const Container = styled.div`
  overflow-y: auto;
`;

const ModalContext = createContext();
export default function Modal({ children }) {
  const [isOpenModal, setIsModalOpen] = useState("");

  function openModal(name) {
    setIsModalOpen(name);
  }
  function closeModal() {
    setIsModalOpen("");
  }
  return (
    <ModalContext.Provider value={{ isOpenModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function Button({ opens, render }) {
  const { openModal } = useContext(ModalContext);

  return render(() => {
    openModal(opens);
  });
}

function Content({ name, render }) {
  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { ref } = useClickOutsideModal(closeModal);
  return (
    <>
      {isOpenModal === name &&
        createPortal(
          <>
            <Overlay>
              <Container>
                <StyledModal ref={ref}>
                  <IoCloseSharp onClick={closeModal} />
                  {render(closeModal)}
                </StyledModal>
              </Container>
            </Overlay>
          </>,
          document.body
        )}
    </>
  );
}

Modal.Button = Button;
Modal.Content = Content;
