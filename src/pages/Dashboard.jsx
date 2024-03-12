import DashboardLayout from "../features/dashboard/DashboardLayout";
import Filters from "../ui/Filters";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

const options = [
  {
    name: "7",
    text: "last 7 days",
  },
  {
    name: "30",
    text: "last 30 days",
  },
  {
    name: "90",
    text: "last 90 days",
  },
];
export default function Dashboard() {
  return (
    <>
      <Row type="h-responsive">
        <Heading as="h1">Dashboard</Heading>
        <Filters options={options} keyValue="last" initialValue="7" />
      </Row>
      <Row>
        <DashboardLayout />
      </Row>
    </>
  );
}
