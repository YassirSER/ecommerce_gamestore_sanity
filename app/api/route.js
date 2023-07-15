import indexer from "sanity-algolia";
import { NextResponse } from "next/server";

import { client } from "../../lib/client";
import { algolia } from "../../lib/algolia";

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
