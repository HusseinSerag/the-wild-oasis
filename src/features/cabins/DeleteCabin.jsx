import { MdDelete } from "react-icons/md";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
export default function DeleteCabin({ mutate, cabinName, id, isLoading }) {
  return (
    <Modal>
      <Modal.Button
        opens="delete"
        render={(onClick) => (
          <Menus.Action onClick={() => onClick()}>
            <MdDelete />
            Delete
          </Menus.Action>
        )}
      />
      <Modal.Content
        name="delete"
        render={(onClose) => (
          <ConfirmDelete
            onClose={onClose}
            resourceName={`${cabinName}`}
            onConfirm={() => mutate(id)}
            disabled={isLoading}
          />
        )}
      />
    </Modal>
  );
}
