import React from 'react'
import { client } from "../lib/client"

import { Product, FooterBanner, HeroBanner } from "./components/index"

const Home = async () => {

  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div>
        <h2>Best selling products</h2>
        <p>best xbox games for cheap</p>
      </div>

      <div>
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  console.log(products, bannerData);

  return {
    props: {products, bannerData}
  }
}

export default Home