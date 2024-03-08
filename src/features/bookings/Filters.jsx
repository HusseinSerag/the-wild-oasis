import { useSearchParams } from "react-router-dom";
import Operations from "../../ui/Operations";

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  function handleDiscount(value) {
    searchParams.set("status", value);
    searchParams.set("page", 0);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Operations initialValue={status || "all"}>
        <Operations.Item
          name="all"
          onClick={() => {
            handleDiscount("all");
          }}
        >
          All
        </Operations.Item>
        <Operations.Item
          name="checked-out"
          onClick={() => {
            handleDiscount("checked-out");
          }}
        >
          Checked out
        </Operations.Item>
        <Operations.Item
          name="checked-in"
          onClick={() => {
            handleDiscount("checked-in");
          }}
        >
          Checked in
        </Operations.Item>
        <Operations.Item
          name="unconfirmed"
          onClick={() => {
            handleDiscount("unconfirmed");
          }}
        >
          unconfirmed
        </Operations.Item>
      </Operations>
    </>
  );
}
