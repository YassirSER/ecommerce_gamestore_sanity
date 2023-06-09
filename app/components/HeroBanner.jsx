import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ heroBanner }) => {
  let urlLink = urlFor(heroBanner.image).url();
  return (
    <div
      className="hero-banner-container"
      style={{ backgroundImage: `url(${urlLink})` }}
    >
      <div>
        {/* <p className="beats-solo">{heroBanner.smallText}</p> */}
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        {/* <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <p>{heroBanner.desc}</p>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
