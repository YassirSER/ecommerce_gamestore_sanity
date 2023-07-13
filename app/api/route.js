import algoliasearch from "algoliasearch";
import sanityClient from "@sanity/client";
import indexer from "sanity-algolia";
import { client } from "../../lib/client";
import { algolia } from "../../lib/algolia";
import { NextResponse } from "next/server";

export async function POST(req) {
  const sanityAlgolia = indexer(
    {
      product: {
        index: algolia.initIndex("dev_gamestore"),
      },
    },
    (document) => {
      switch (document._type) {
        case "product":
          return {
            name: document.name,
            slug: document.slug.current,
            price: document.price,
            image: document.image,
          };
        default:
          throw new Error(`Unknown type: ${document._type}`);
      }
    }
  );

  try {
    let res = await sanityAlgolia.webhookSync(client, req.body);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
