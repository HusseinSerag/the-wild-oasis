import Modal from "./../../ui/Modal";
import Button from "./../../ui/Button";
import { useState } from "react";

import styled from "styled-components";
import CabinForm from "./CabinForm";

const ButtonWrapper = styled.div`
  align-self: baseline;
`;
export default function AddCabin() {
  return (
    <Modal>
      <ButtonWrapper>
        <Modal.Button
          opens="cabin-form"
          render={(click) => (
            <Button onClick={click} variation="primary">
              Add Cabin
            </Button>
          )}
        />
      </ButtonWrapper>

      <Modal.Content
        name="cabin-form"
        render={(onCloseModal) => <CabinForm onCloseModal={onCloseModal} />}
      />
    </Modal>
  );
}
