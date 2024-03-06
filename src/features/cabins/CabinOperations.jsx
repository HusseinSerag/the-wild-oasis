import { useNavigate, useSearchParams } from "react-router-dom";
import Operations from "../../ui/Operations";
import Filters from "./Filters";

export default function CabinOperations() {
  return (
    <div>
      <Filters />
    </div>
  );
}
