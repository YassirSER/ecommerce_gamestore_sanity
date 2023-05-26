import { client } from "../../lib/client";
import { ProductsWithSorting } from "../components/index";
// import Loading from "../components/Loading";

const GetSearchResults = async ({ search }) => {
  const query = `
    *[_type == "product" && name match "${search}*"]
`;
  const products = await client.fetch(query);
  return <ProductsWithSorting products={products} />;
};

export default GetSearchResults;
