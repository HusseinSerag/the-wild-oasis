import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import CabinForm from "./CabinForm";
import { FaEdit } from "react-icons/fa";

export default function EditCabins({ cabin }) {
  return (
    <Modal>
      <Modal.Button
        render={(click) => (
          <Menus.Action onClick={click}>
            <FaEdit />
            Edit
          </Menus.Action>
        )}
        opens="edit-cabin"
      />

      <Modal.Content
        name="edit-cabin"
        render={(close) => <CabinForm cabin={cabin} onCloseModal={close} />}
      />
    </Modal>
  );
}
