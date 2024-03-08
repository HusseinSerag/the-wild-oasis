import styled from "styled-components";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
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
export default function Pagination() {
  return (
    <Container>
      <div>
        Showing <Bold>1</Bold> to <Bold>10</Bold> of <Bold>38</Bold> results
      </div>
      <Buttons>
        <Button>
          <FaAngleLeft /> Previous
        </Button>
        <Button>
          Next <FaAngleRight />
        </Button>
      </Buttons>
    </Container>
  );
}
