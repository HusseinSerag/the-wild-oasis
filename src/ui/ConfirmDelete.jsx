import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  max-width: 50rem;
  display: flex;
  min-width: 28rem;
  flex-direction: column;
  gap: 1.2rem;
  background-color: var(--color-grey-0);
  padding: 2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
    font-size: 1.4rem;
    font-weight: 600;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, onClose, disabled }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onClose} disabled={disabled}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
