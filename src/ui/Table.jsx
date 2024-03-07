import { createContext, useContext } from "react";
import styled, { css } from "styled-components";

const TableContext = createContext();
const StyledTableHeader = styled.header`
  display: grid;
  ${(props) => css`
    grid-template-columns: ${props.columns} 40px;
  `};

  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);

  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-grey-600);
  letter-spacing: 0.3px;
  font-size: 1.7rem;
`;
const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  overflow-x: auto;
`;
const HeaderItem = styled.div`
  background-color: var(--color-grey-50);
  padding: 2rem 4rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem;
  }
`;
const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  &:not(:has(*)) {
    display: none;
  }
`;
const StyledTableRow = styled.div`
  display: grid;
  gap: 0.1rem;
  ${(props) => css`
    grid-template-columns: ${props.columns};
  `};
  align-items: center;
  font-size: 1.7rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-family: "Sono";

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0.5rem 1rem;
  }
`;
const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

export default function Table({ children, columns }) {
  const tableColumns = columns;
  return (
    <TableContext.Provider value={{ tableColumns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function TableHeader({ children }) {
  const { tableColumns: columns } = useContext(TableContext);
  return (
    <StyledTableHeader role="header" as="header" columns={columns}>
      {children}
    </StyledTableHeader>
  );
}

function TableRow({ children }) {
  const { tableColumns: columns } = useContext(TableContext);
  return (
    <StyledTableRow role="row" columns={columns}>
      {children}
    </StyledTableRow>
  );
}

function Body({ data, render }) {
  if (!data.length) {
    return <Empty>No Data to show at this moment</Empty>;
  }
  return <StyledBody>{data.map(render)}</StyledBody>;
}
Table.Header = TableHeader;
Table.HeaderItem = HeaderItem;
Table.Row = TableRow;
Table.Footer = Footer;
Table.Body = Body;
