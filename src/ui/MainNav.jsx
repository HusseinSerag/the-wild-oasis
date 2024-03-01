import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const TextSpan = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default function MainNav() {
  return (
    <section>
      <NavList>
        <li>
          <Link to="/dashboard">
            <TextSpan>Home</TextSpan>
          </Link>
        </li>
        <li>
          <Link to="/bookings">
            <TextSpan>Bookings</TextSpan>
          </Link>
        </li>
        <li>
          <Link to="/cabins">
            <TextSpan>Cabins</TextSpan>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <TextSpan>Users</TextSpan>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <TextSpan>Settings</TextSpan>
          </Link>
        </li>
      </NavList>
    </section>
  );
}
