import styled from "styled-components";
import Heading from "../../ui/Heading";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../Contexts/DarkModeContext";

const StyledDashboardChart = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--color-grey-0);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: var(--border-radius-md);
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

const Header = styled(Heading)`
  text-align: left;
  font-weight: 600;
`;

export default function DashboardChart({ numNights, bookings }) {
  const eachDay = eachDayOfInterval({
    end: new Date(),
    start: subDays(new Date(), numNights - 1),
  });

  const data = eachDay.map((day) => {
    const object = {
      label: format(day, "MMM dd"),
      totalSales: 0,
      extraSales: 0,
    };
    for (const booking of bookings) {
      if (isSameDay(day, new Date(booking.created_at))) {
        object.totalSales += booking.totalPrice;
        object.extraSales += booking.extraPrice;
      }
    }

    return object;
  });

  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extraSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extraSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledDashboardChart>
      <Header as="h2">
        Sales from {format(subDays(new Date(), numNights - 1), "MMM dd y")} -{" "}
        {format(new Date(), "MMM dd y")}{" "}
      </Header>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extraSales"
            type="monotone"
            stroke={colors.extraSales.stroke}
            fill={colors.extraSales.fill}
            strokeWidth={2}
            name="Extras sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledDashboardChart>
  );
}
