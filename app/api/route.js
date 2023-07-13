import algoliasearch from "algoliasearch";
import sanityClient from "@sanity/client";
import indexer from "sanity-algolia";
import { client } from "../../lib/client";
import { algolia } from "../../lib/algolia";
import { NextResponse } from "next/server";

export function POST(req) {
  const sanityAlgolia = indexer(
    {
      product: {
        index: algolia.initIndex("dev_gamestore"),
        projection: `
          name,
          "path": slug.current,
          image,
          price
        `,
      },
    },
    (document) => {
      switch (document._type) {
        case "product":
          return {
            name: document.name,
            path: document.path,
            price: document.price,
            image: document.image,
          };
        default:
          return document;
      }
    }
  );

  return sanityAlgolia
    .webhookSync(client, req.body)
    .then(() => NextResponse.json({ msg: "lessgoo" }))
    .catch((err) => {
      return NextResponse.json({ err: err });
    });
}
