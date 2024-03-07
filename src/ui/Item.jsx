import styled from "styled-components";

const Item = styled.div`
  padding: 1rem 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0;
  }
`;

export default Item;
