import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/client'

const HeroBanner = ({ heroBanner }) => {
  let urlLink = urlFor(heroBanner.image).url()
  return (
    <div className='hero-banner-container' style={{ backgroundImage: `url(${urlLink})` }}>
      {console.log(heroBanner)}
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

        <div>
          <Link ><button type='button'>BUTTON TEXT</button></Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner