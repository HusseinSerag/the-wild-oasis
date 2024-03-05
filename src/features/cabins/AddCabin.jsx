import Modal from "./../../ui/Modal";
import Button from "./../../ui/Button";
import { useState } from "react";

import styled from "styled-components";
import CabinForm from "./CabinForm";

const ButtonWrapper = styled.div`
  align-self: baseline;
`;
export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function handleClose() {
    setIsOpenModal(false);
  }
  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setIsOpenModal(true)} variation="primary">
          Add Cabin
        </Button>
      </ButtonWrapper>
      {isOpenModal && (
        <Modal onClose={handleClose}>
          <CabinForm onCloseModal={handleClose} />
        </Modal>
      )}
    </>
  );
}
