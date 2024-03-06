import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  background-color: var(--color-grey-0);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  display: flex;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-grey-100);
  gap: 0.4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  border-radius: var(--border-radius-md);
  cursor: pointer;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;

  &:hover {
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  }
  &.active {
    background-color: var(--color-brand-600);
    color: var(--color-grey-0);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
`;

const OpContext = createContext();
export default function Operations({ children, initialValue }) {
  const [name, setName] = useState(initialValue);
  const setChosenName = setName;
  return (
    <Container>
      <OpContext.Provider value={{ name, setChosenName }}>
        {children}
      </OpContext.Provider>
    </Container>
  );
}

function OperationItem({ children, onClick, name }) {
  const { setChosenName, name: chosenName } = useContext(OpContext);

  function handleClick() {
    setChosenName(name);
    onClick?.();
  }

  return (
    <Item
      onClick={handleClick}
      className={`${chosenName === name && "active"}`}
    >
      {children}
    </Item>
  );
}

Operations.Item = OperationItem;
