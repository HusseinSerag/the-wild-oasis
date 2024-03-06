import { useNavigate } from "react-router-dom";
import Operations from "../../ui/Operations";

export default function CabinOperations() {
  const navigate = useNavigate();
  return (
    <Operations>
      <Operations.Item name="all" onClick={() => navigate("?discount=all")}>
        All
      </Operations.Item>
      <Operations.Item
        name="discount"
        onClick={() => navigate("?discount=discount")}
      >
        No discount
      </Operations.Item>
      <Operations.Item
        name="no-discount"
        onClick={() => navigate("?discount=no-discount")}
      >
        With discount
      </Operations.Item>
    </Operations>
  );
}
