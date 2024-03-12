import styled from "styled-components";
import { useDarkMode } from "../Contexts/DarkModeContext";

const Img = styled.img`
  height: 100%;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <Img
      src={`${isDarkMode ? "/logo-dark.png" : "/logo-light.png"}`}
      alt="Logo"
    />
  );
}

export default Logo;
