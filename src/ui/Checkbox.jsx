import styled from "styled-components";

const Box = styled.input.attrs({ type: "checkbox" })`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export default function Checkbox({
  children,
  label,
  value,
  onChange,
  disabled,
}) {
  return (
    <StyledCheckbox>
      <Box id={label} checked={value} disabled={disabled} onChange={onChange} />

      <label htmlFor={label}>{children}</label>
    </StyledCheckbox>
  );
}
