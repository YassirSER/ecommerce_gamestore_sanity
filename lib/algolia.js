import algoliasearch from "algoliasearch";

export const algolia = algoliasearch(
  "P70RWENSTV",
  process.env.NEXT_PUBLIC_ADMIN_API_ALGOLIA
);
