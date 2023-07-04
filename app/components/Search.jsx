"use client";

// components/search.js
import { InstantSearch } from "react-instantsearch-dom";
import { SearchBar } from "./";
import { SearchHits } from "./";

import { algolia } from "../../lib/algolia";
import { useStateContext } from "../context/stateContext";

export default function Search() {
  const { showSearchHits } = useStateContext();
  return (
    // <div className={"algolia-search"}>
    <div className="searchbar-container">
      <InstantSearch searchClient={algolia} indexName="dev_gamestore">
        <SearchBar inputClassname="searchbar" />
        {showSearchHits && <SearchHits />}
      </InstantSearch>
    </div>
    // </div>
  );
}
