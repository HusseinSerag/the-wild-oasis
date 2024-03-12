import styled from "styled-components";

const StyledDashboardLayout = styled.div``;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 1.5rem;
`;

const Item = styled.div`
  background-color: red;
`;
export default function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Items>
        <Item>Hello</Item>
        <Item>Hello</Item>
        <Item>Hello</Item>
        <Item>Hello</Item>
      </Items>
    </StyledDashboardLayout>
  );
}
