import styled from "styled-components";
import { formatCurrency } from "../../util/helpers";

import useDeleteCabin from "./useDeleteCabin";
import useMutateCabin from "./useMutateCabin";

import Modal from "../../ui/Modal";

import Table from "../../ui/Table";
import Menus from "./../../ui/Menus";

import { FaCopy, FaEdit } from "react-icons/fa";
import CabinForm from "./CabinForm";
import { MdDelete } from "react-icons/md";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Item from "../../ui/Item";

const Img = styled.img`
  display: block;
  width: 10rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
`;

const Cabin = styled.div`
  color: var(--color-grey-600);
`;

const Discount = styled.div`
  color: var(--color-green-700);
`;
const Capacity = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export default function CabinRow({ cabin }) {
  const {
    cabinName,
    created_at,
    description,
    discount,
    image,
    maxCapacity,
    regularPrice,
    id,
  } = cabin;

  const { isLoading, mutate } = useDeleteCabin();
  const { mutate: duplicateCabin, status } = useMutateCabin({
    isEditing: false,
  });

  const isCreating = status === "pending";

  function handleDuplicate() {
    duplicateCabin({
      cabinName: `copy of ${cabinName}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <Table.Row role="row">
      <Item>
        <Img src={image} />
      </Item>
      <Item>
        <Cabin>{cabinName}</Cabin>
      </Item>
      <Item>
        <Capacity>Fits up to {maxCapacity} guests</Capacity>
      </Item>
      <Item>
        <div>{formatCurrency(regularPrice)}</div>
      </Item>
      <Item>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <div>&mdash;</div>
        )}
      </Item>
      <Item>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle name={`${id}`} />

            <Menus.List name={`${id}`}>
              <Menus.Action onClick={() => handleDuplicate()}>
                {" "}
                <div disabled={isCreating}>
                  <FaCopy />
                </div>
                Duplicate
              </Menus.Action>

              <Modal.Button
                opens="delete"
                render={(onClick) => (
                  <Menus.Action onClick={() => onClick()}>
                    <MdDelete />
                    Delete
                  </Menus.Action>
                )}
              />

              <Modal.Button
                render={(click) => (
                  <Menus.Action onClick={click}>
                    <FaEdit />
                    Edit
                  </Menus.Action>
                )}
                opens="edit-cabin"
              />
            </Menus.List>
            <Modal.Content
              name="edit-cabin"
              render={(close) => (
                <CabinForm cabin={cabin} onCloseModal={close} />
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
          </Menus.Menu>
        </Modal>
      </Item>
    </Table.Row>
  );
}
