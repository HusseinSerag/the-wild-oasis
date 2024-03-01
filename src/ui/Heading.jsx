import styled, { css } from "styled-components";
const text = css`
  text-align: center;
`;
const Heading = styled.h1`
  ${text}
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `} 

    ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 30px;
      font-weight: 400;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 10px;
      font-weight: 200;
    `}
`;

export default Heading;
