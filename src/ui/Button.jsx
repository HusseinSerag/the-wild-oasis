import styled, { css } from "styled-components";

const size = {
  sm: css`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  `,
  md: css`
    font-size: 1.5rem;
    padding: 1.1rem 1.5rem;
  `,
  lg: css`
    font-size: 1.8rem;
    padding: 1.2rem 1.7rem;
  `,
};

const variation = {
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
  ${(props) => variation[props.variation]};
  box-shadow: var(--shadow-sm);
  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  size: "sm",
  variation: "primary",
};

export default Button;
