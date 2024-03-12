import styled from "styled-components";
import { useUsers } from "../features/authentication/useUsers";

const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const StyledUserItems = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export default function UserItems() {
  const { user } = useUsers();
  const { fullName, avatar } = user.user_metadata;

  console.log(avatar);
  return (
    <StyledUserItems>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`avatar of ${fullName}`}
      />
      {fullName}
    </StyledUserItems>
  );
}
