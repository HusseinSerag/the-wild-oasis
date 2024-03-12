import { useSearchParams } from "react-router-dom";
import Operations from "./Operations";

export default function Filters({ keyValue, initialValue, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(keyValue);

  function handleValue(value) {
    searchParams.set(keyValue, value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <Operations initialValue={value || initialValue}>
        {options.map((item) => (
          <Operations.Item
            name={item.name}
            key={item.name}
            onClick={() => {
              handleValue(item.name);
            }}
          >
            {item.text}
          </Operations.Item>
        ))}
      </Operations>
    </>
  );
}
