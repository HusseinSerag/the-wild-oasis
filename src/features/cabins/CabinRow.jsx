import styled from "styled-components";
import { formatCurrency } from "../../util/helpers";

import { useState } from "react";
import CabinForm from "./CabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useMutateCabin from "./useMutateCabin";

const TableRow = styled.div`
  display: grid;
  column-gap: 2.4rem;
  grid-template-columns: 100px 100px 190px 160px 130px 1fr;
  align-items: center;
  font-size: 1.7rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-family: "Sono";

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
  }
`;

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
  const [openEdit, setOpenEdit] = useState(false);

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
    <TableRow role="row">
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
        <button disabled={isLoading} onClick={() => mutate(id)}>
          Delete
        </button>
        <button onClick={() => setOpenEdit((c) => !c)}>Edit</button>
        {openEdit && <CabinForm cabin={cabin} />}
      </Item>
    </TableRow>
  );
}
