import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

   ${(props) =>
    props.type === "h-responsive" &&
    css`
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
