import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import DarkMode from "./DarkMode";
import Avatar from "./Avatar";

const List = styled.ul`
  display: flex;
  gap: 0.7rem;
  & svg {
    width: 2.7rem;
    height: 2.7rem;
  }
`;
export default function HeaderItems() {
  return (
    <List>
      <Avatar />
      <DarkMode />
      <Logout />
    </List>
  );
}
