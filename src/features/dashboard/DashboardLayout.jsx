import styled from "styled-components";

import DashboardStats from "./DashboardStats";

const StyledDashboardLayout = styled.div`
  padding: 1rem;
`;

export default function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <DashboardStats />
    </StyledDashboardLayout>
  );
}
