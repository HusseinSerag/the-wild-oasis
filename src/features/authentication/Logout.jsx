import { CiLogout } from "react-icons/ci";
import useLogout from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
export default function Logout() {
  const { logoutUser, isPending } = useLogout();
  return (
    <ButtonIcon onClick={logoutUser}>
      <CiLogout />
    </ButtonIcon>
  );
}
