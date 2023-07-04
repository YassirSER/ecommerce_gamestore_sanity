"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { client } from "../../lib/client";
import { ProductsWithSorting } from "../components/index";
import Loading from "./Loading";
// import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./search-box";
import SearchHits from "./search-hits";

import { algolia } from "../../lib/algolia";

const Search = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className={"algolia-search"}>
          <InstantSearch searchClient={algolia} indexName="dev_gamestore">
            <SearchBox />
            <SearchHits />
          </InstantSearch>
        </div>
        {/* <ProductsWithSorting products={products} /> */}
      </Suspense>
    </>
  );
};

export default Search;
