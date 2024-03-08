import styled from "styled-components";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../util/constants";
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  border: 0;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.8rem;
  padding: 1.2rem 1rem;
  font-weight: 500;

  &:hover {
    background-color: var(--color-brand-700);
    color: var(--color-brand-50);
  }
`;
const Bold = styled.span`
  font-weight: 600;
`;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Pagination({ total, activePage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 0;
  const from = +page * PAGE_SIZE;
  const to = +page * PAGE_SIZE + activePage;

  const previousDisabled = +page === 0;
  const nextDisabled = to >= total;

  if (previousDisabled && nextDisabled) return;

  function handleNext() {
    if (!nextDisabled) {
      searchParams.set("page", +page + 1);
      setSearchParams(searchParams);
    }
  }

  function handlePrevious() {
    if (!previousDisabled) {
      searchParams.set("page", +page - 1);

      setSearchParams(searchParams);
    }
  }

  return (
    <Container>
      <div>
        Showing <Bold>{from + 1}</Bold> to <Bold>{to}</Bold> of{" "}
        <Bold>{total}</Bold> results
      </div>
      <Buttons>
        <Button disabled={previousDisabled} onClick={handlePrevious}>
          <FaAngleLeft /> Previous
        </Button>
        <Button disabled={nextDisabled} onClick={handleNext}>
          Next <FaAngleRight />
        </Button>
      </Buttons>
    </Container>
  );
}
