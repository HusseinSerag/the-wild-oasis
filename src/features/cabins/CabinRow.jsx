import styled from "styled-components";
import { formatCurrency } from "../../util/helpers";

import useDeleteCabin from "./useDeleteCabin";
import useMutateCabin from "./useMutateCabin";
import EditCabins from "./EditCabins";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

const Img = styled.img`
  display: block;
  width: 10rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
`;
const Item = styled.div`
  padding: 1rem 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
  }
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
      <Img src={image} />
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
        <button disabled={isCreating} onClick={() => handleDuplicate()}>
          Duplicate
        </button>
        <Modal>
          <Modal.Button
            opens="delete"
            render={(onClick) => <button onClick={onClick}>Delete</button>}
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
        <EditCabins cabin={cabin} />
      </Item>
    </Table.Row>
  );
}
