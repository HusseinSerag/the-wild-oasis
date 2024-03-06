import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";

export default function EditCabins({ cabin }) {
  return (
    <>
      <Modal>
        <Modal.Button
          render={(click) => <button onClick={click}>edit</button>}
          opens="edit-cabin"
        />

        <Modal.Content
          name="edit-cabin"
          render={(close) => <CabinForm cabin={cabin} onCloseModal={close} />}
        />
      </Modal>
    </>
  );
}
