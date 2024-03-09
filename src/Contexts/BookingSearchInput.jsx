import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchContext = createContext();
export default function BookingSearchInput({ children }) {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  function onSearch(e) {
    searchParams.set("page", 0);
    setSearchParams(searchParams);
    setSearch(e.target.value);
  }
  return (
    <SearchContext.Provider value={{ search, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("Cannot use useSearch outside of searchContext");
  }

  return context;
}
