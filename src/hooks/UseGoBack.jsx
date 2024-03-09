import { useNavigate } from "react-router-dom";

export default function UseNavigateToSpecificPage() {
  const navigate = useNavigate();

  function go(path) {
    navigate(path || -1);
  }

  return go;
}
