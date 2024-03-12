import styled from "styled-components";
import DurationChart from "./DurationChart";

const StyledDashboardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function DashboardList({ stays }) {
  return (
    <StyledDashboardList>
      <div>tody's activity</div>
      <DurationChart stays={stays} />
    </StyledDashboardList>
  );
}
