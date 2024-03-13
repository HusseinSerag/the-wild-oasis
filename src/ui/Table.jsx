/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const TableContext = createContext();
const StyledTableHeader = styled.header`
  display: grid;
  ${(props) => css`
    grid-template-columns: ${props.columns};
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
  background-color: var(--color-grey-50);
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
  background-color: var(--color-grey-0);
`;

const StyledFooter = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  width: ${(props) => props.width}px;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;
const StyledTableRow = styled.div`
  display: grid;
  gap: 0.1rem;
  background-color: var(--color-grey-0);
  ${(props) => css`
    grid-template-columns: ${props.columns};
  `};
  align-items: center;
  font-size: 1.7rem;

  font-weight: 600;
  font-family: "Sono";

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

function Footer({ children }) {
  const { tableColumns } = useContext(TableContext);
  const totalWidth = tableColumns
    .split(" ")
    .map((el) => el.replace("px", ""))
    .map(Number)
    .reduce((prev, current) => prev + current, 0);

  return <StyledFooter width={totalWidth}>{children}</StyledFooter>;
}
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
  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page");
  useEffect(
    function () {
      if (page > 0 && !data.length) {
        searchParams.set("page", page - 1);
        setSearchParams(searchParams);
      }
    },
    [data.length, page, searchParams, setSearchParams]
  );
  if (!data.length && page === 0) {
    return <Empty>No Data to show at this moment</Empty>;
  }
  return <StyledBody>{data.map(render)}</StyledBody>;
}
Table.Header = TableHeader;
Table.HeaderItem = HeaderItem;
Table.Row = TableRow;
Table.Footer = Footer;
Table.Body = Body;
