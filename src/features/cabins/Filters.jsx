import { useSearchParams } from "react-router-dom";
import Operations from "../../ui/Operations";

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const discount = searchParams.get("discount");

  function handleDiscount(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Operations initialValue={discount || "all"}>
        <Operations.Item
          name="all"
          onClick={() => {
            handleDiscount("all");
          }}
        >
          All
        </Operations.Item>
        <Operations.Item
          name="no-discount"
          onClick={() => {
            handleDiscount("no-discount");
          }}
        >
          No discount
        </Operations.Item>
        <Operations.Item
          name="discount"
          onClick={() => {
            handleDiscount("discount");
          }}
        >
          With discount
        </Operations.Item>
      </Operations>
    </>
  );
}
