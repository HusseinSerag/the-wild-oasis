import { MdOutlineDarkMode } from "react-icons/md";
import ButtonIcon from "./ButtonIcon";
import { MdOutlineLightMode } from "react-icons/md";
import { useDarkMode } from "../Contexts/DarkModeContext";
export default function DarkMode() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <ButtonIcon onClick={toggle}>
      {!isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </ButtonIcon>
  );
}
