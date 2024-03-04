import styled from "styled-components";
import { formatCurrency } from "../../util/helpers";
import { deleteCabin } from "../../services/cabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

      toast.success("Cabin deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
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
        <Discount>{formatCurrency(discount) ?? "_"}</Discount>
      </Item>
      <Item>
        <button disabled={isLoading} onClick={() => mutate(id)}>
          Delete
        </button>
      </Item>
    </TableRow>
  );
}
