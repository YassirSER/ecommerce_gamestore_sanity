import algoliasearch from "algoliasearch";
import indexer from "sanity-algolia";
import { client } from "../../lib/client";
import { NextResponse } from "next/server";

import algoliasearch from "algoliasearch";

export const algolia = algoliasearch(
  "P70RWENSTV",
  process.env.NEXT_PUBLIC_ADMIN_API_ALGOLIA
);

export async function POST(req) {
  try {
    const sanityAlgolia = indexer(
      {
        product: {
          index: algolia.initIndex("dev_gamestore"),
        },
      },
      (document) => {
        console.log(document);
        switch (document._type) {
          case "product":
            return {
              name: document.name,
              path: document.slug["current"],
              price: document.price,
              image: document.image,
            };
          default:
            return document;
        }
      }
    );

    const body = await req.json();

    const webhook = await sanityAlgolia.webhookSync(client, body);

    return webhook && NextResponse.json({ msg: "lessgoo" });
  } catch (err) {
    let error_response = {
      status: "error",
      msg: err,
    };
    return new NextResponse(JSON.stringify(error_response));
  }
}
