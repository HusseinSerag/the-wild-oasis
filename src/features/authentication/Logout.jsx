import { MdOutlineLogout } from "react-icons/md";
import useLogout from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
export default function Logout() {
  const { logoutUser, isPending } = useLogout();
  return (
    <ButtonIcon disabled={isPending} onClick={logoutUser}>
      <MdOutlineLogout />
    </ButtonIcon>
  );
}
