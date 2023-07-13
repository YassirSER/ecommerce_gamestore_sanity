"use client";

import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";

function SearchHits({ searchState, searchResults }) {
  // checking if the query length is >= 3
  // (since 3 is the minimum Algolia query length)
  const validQuery = searchState.query?.length >= 3;

  const getLink = (hit) => {
    const link = `https://cdn.sanity.io/images/260v8qz7/production/${hit.image[0].asset._ref
      .slice(6)
      .replaceAll("-", ".")
      .replace(".", "-")}`;
    return link;
  };

  return searchState.query && validQuery ? (
    <div className={"search-hits"}>
      {searchResults?.hits.length === 0 && <div>No results found!</div>}
      {searchResults?.hits.length > 0 &&
        searchResults.hits.map((hit) => (
          <div key={hit["slug.current"]} className="suggestion">
            <img src={getLink(hit)} className="search-img" />
            <Link
              href={`/product/${hit["slug.current"]}`}
              className="search-name"
            >
              {hit.name}
            </Link>
            <div className="search-price">{hit.price}MAD</div>
          </div>
        ))}
    </div>
  ) : null;
}

export default connectStateResults(SearchHits);
