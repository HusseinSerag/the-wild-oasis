import styled, { css } from "styled-components";

const size = {
  sm: css`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  `,
  md: css`
    font-size: 1.4rem;
    padding: 0.9rem 1.4rem;
  `,
  lg: css`
    font-size: 1.6rem;
    padding: 1.2rem 1.7rem;
  `,
};

const btnType = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius-sm);
  ${(props) => size[props.size]}
  ${(props) => btnType[props.type]};
  box-shadow: var(--shadow-sm);
`;

Button.defaultProps = {
  size: "sm",
  type: "primary",
};

export default Button;
