import CabinTable from "../features/cabins/CabinTable";
import CabinForm from "../features/cabins/CabinForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useState } from "react";
import styled from "styled-components";
const ButtonWrapper = styled.div`
  align-self: baseline;
`;
export default function Cabins() {
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">All Cabins</Heading>
        <p>sort / filter /</p>
      </Row>
      <Row>
        <CabinTable />
        <ButtonWrapper>
          <Button onClick={() => setShowModal(true)} variation="primary">
            Add Cabin
          </Button>
        </ButtonWrapper>
        {showModal && (
          <Modal onClose={handleClose}>
            <CabinForm />
          </Modal>
        )}
      </Row>
    </>
  );
}
