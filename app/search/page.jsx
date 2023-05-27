"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { client } from "../../lib/client";
import { ProductsWithSorting } from "../components/index";
import Loading from "./Loading";

const Search = async () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("name");
  const query = `
  *[_type == "product" && name match "${search}*"]
  `;
  const products = await client.fetch(query);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductsWithSorting products={products} />
      </Suspense>
    </>
  );
};

export default Search;
