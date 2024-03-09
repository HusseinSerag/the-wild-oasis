import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import styled from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../util/helpers";
import { Flag } from "../../ui/Flag";
import DataItem from "../../ui/DataItem";

const Header = styled.header`
  background-color: var(--color-brand-500);
  color: var(--color-grey-0);
  border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem 2.5rem;
  @media screen and (max-width: 768px) {
    padding: 1.2rem 3rem;
    flex-direction: column;
    gap: 1rem;
    align-items: baseline;
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

const Text = styled.p`
  font-weight: 600;

  &:has(svg) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  & svg {
    width: 3rem;
    height: 3rem;
  }
`;

const Section = styled.section`
  padding: 4rem 2.5rem;
  background-color: var(--color-grey-0);
  @media screen and (max-width: 768px) {
    padding: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 4rem;
  }
`;
const Guest = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--color-grey-500);
  & span:first-of-type {
    font-weight: 600;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  background-color: var(
    --color-${(props) => (props.ispaid === "true" ? "green" : "yellow")}-100
  );
  color: var(
    --color-${(props) => (props.ispaid === "true" ? "green" : "yellow")}-700
  );

  & svg {
    color: var(
      --color-${(props) => (props.ispaid === "true" ? "green" : "yellow")}-700
    );
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    padding-top: 0;
  }
`;

const Uppercase = styled.span`
  text-transform: uppercase;
`;
const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
  background-color: var(--color-grey-0);
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
`;
export default function BookingBox({
  booking: {
    cabinPrice,
    created_at,
    endDate,
    extraPrice,
    hasBreakfast,
    isPaid,
    numGuests,
    numNights,
    startDate,
    totalPrice,
    observations,
    cabins: { cabinName },
    guests: { email, fullName, nationalID, nationality: country, countryFlag },
  },
}) {
  return (
    <div>
      <Header>
        <Text>
          <HiOutlineHomeModern /> {numNights} night{numNights > 1 ? "s" : ""} in
          Cabin {cabinName}
        </Text>
        <Text>
          {format(startDate, "iii, LLL M yyyy")}{" "}
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          -{format(endDate, "iii, LLL M yyyy")}{" "}
        </Text>
      </Header>
      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <span>
            {fullName}{" "}
            {numGuests > 1
              ? `+ ${numGuests - 1} guest${numGuests - 1 > 1 ? "s" : ""}`
              : ""}
          </span>{" "}
          <span>&bull;</span>
          <span>{email}</span> <span>&bull;</span>
          <span>{nationalID}</span>
        </Guest>
        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>
        <Price ispaid={isPaid.toString()}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extraPrice
              )} breakfast)`}
          </DataItem>

          <Text>
            <Uppercase>{isPaid ? "Paid" : "Will pay at property"}</Uppercase>
          </Text>
        </Price>
      </Section>
      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </div>
  );
}
