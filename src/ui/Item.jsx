import styled from "styled-components";

const Item = styled.div`
  padding: 3rem 2rem;
  background-color: var(--color-grey-0);
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 1.7rem 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Item;
