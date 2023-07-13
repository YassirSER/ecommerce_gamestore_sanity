import algoliasearch from "algoliasearch";
import sanityClient from "@sanity/client";
import indexer from "sanity-algolia";
import { client } from "../../lib/client";
import { algolia } from "../../lib/algolia";

export default function handler(req, res) {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex("dev_gamestore"),
      },
    },
    (document) => {
      switch (document?._type) {
        case "product":
          return {
            name: document?.name,
            slug: document?.slug.current,
            price: document?.price,
            image: document?.image,
          };
        default:
          throw new Error(`Unknown type: ${document?._type}`);
      }
    }
  );

  return sanityAlgolia
    .webhookSync(client, req?.body)
    .then(() => res?.status(200).send("ok"));
}
