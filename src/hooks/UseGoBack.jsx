import { useNavigate } from "react-router-dom";

export default function UseNavigateToSpecificPage(path) {
  const navigate = useNavigate();

  function go() {
    navigate(path || -1);
  }

  return go;
}
