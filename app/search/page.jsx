"use client";

import { useSearchParams } from "next/navigation";

import GetSearchResults from "./searchClient";

const Search = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("name");

  return <GetSearchResults search={search} />;
};

export default Search;
