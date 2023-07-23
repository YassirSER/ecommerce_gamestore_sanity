"use client";

// components/search.js
import { InstantSearch } from "react-instantsearch-dom";
import { SearchBar } from ".";
import { SearchHits } from ".";

import { algolia } from "../lib/algolia";
import { useStateContext } from "../app/context/stateContext";

export default function Search({ appearance }) {
  const { showSearchHits, showSearchbarState } = useStateContext();
  let variable = () => {
    if (appearance === "desktop") {
      return true;
    } else if (showSearchbarState) {
      return true;
    } else {
      return false;
    }
  };
  const bruh = () => {
    console.log(appearance);
  };
  return (
    // <div className={"algolia-search"}>
    <div
      className={"searchbar-container"}
      style={variable() ? { display: "inline-block" } : { display: "none" }}
      onClick={bruh}
    >
      <InstantSearch searchClient={algolia} indexName="dev_gamestore">
        <SearchBar inputClassname={"searchbar"} />
        {showSearchHits && <SearchHits />}
      </InstantSearch>
    </div>
    // </div>
  );
}
