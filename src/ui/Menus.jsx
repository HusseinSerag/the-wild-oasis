import { createContext, useContext, useState } from "react";
import styled from "styled-components";

import { HiDotsVertical } from "react-icons/hi";
import { createPortal } from "react-dom";
import useClickOutsideModal from "../hooks/useClickOutsideModal";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: relative;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  top: -60px;
  left: -80px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  z-index: 100;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

export default function Menus({ children }) {
  const [active, setActive] = useState("");

  function toggle(name) {
    setActive((active) => (active !== name ? name : ""));
  }
  function close() {
    setActive("");
  }
  return (
    <MenuContext.Provider value={{ active, toggle, close }}>
      <div>{children}</div>
    </MenuContext.Provider>
  );
}

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Toggle({ name }) {
  const { toggle } = useContext(MenuContext);

  return (
    <StyledToggle>
      <HiDotsVertical onClick={() => toggle(name)} />
    </StyledToggle>
  );
}

function MenuList({ children, name }) {
  const { active, close } = useContext(MenuContext);
  const { ref } = useClickOutsideModal(close);

  if (active !== name) return null;
  return <StyledList ref={ref}>{children}</StyledList>;
}
function Action({ children, onClick }) {
  const { close } = useContext(MenuContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = MenuList;
Menus.Action = Action;