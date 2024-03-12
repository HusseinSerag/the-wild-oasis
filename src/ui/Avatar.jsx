import UseNavigateToSpecificPage from "../hooks/UseGoBack";
import ButtonIcon from "./ButtonIcon";
import { IoPersonOutline } from "react-icons/io5";
export default function Avatar() {
  const go = UseNavigateToSpecificPage();
  return (
    <ButtonIcon onClick={() => go("/account")}>
      <IoPersonOutline />
    </ButtonIcon>
  );
}
