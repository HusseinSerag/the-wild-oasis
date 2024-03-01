import styled from "styled-components";

const Img = styled.img`
  height: 100%;
  width: auto;
`;

function Logo() {
  return <Img src="/logo-light.png" alt="Logo" />;
}

export default Logo;
