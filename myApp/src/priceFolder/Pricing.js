import React from 'react'
import FreePricing from './FreePricing'
import StandardPricing from './StandardPricing'
import PremiumPricing from './PremiumPricing'

const Pricing = () => {
  return (
    <React.Fragment>
    <main>
      <div className="bg-gray-100 space-y-5 py-20 md:flex md:justify-center md:items-center md:space-y-0">
        <FreePricing/>
        <StandardPricing/>
        <PremiumPricing/>
      </div>
    </main>
  </React.Fragment>
  )
}

export default Pricing