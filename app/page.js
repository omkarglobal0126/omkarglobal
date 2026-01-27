import React from 'react'
import Hero from './components/homepage/Hero'
import About from './components/homepage/About'
import Services from './components/homepage/Services'
import WhatWeExport from './components/homepage/WhatWeExport'
import WhyChoose from './components/homepage/WhyChoose'
import FAQ from './components/homepage/FAQ'
import RequestQuote from './components/homepage/RequestQuote'

export default function page() {
  return (
    <div className=''>
      <Hero/>
      <About/>
      <Services/>
      <WhatWeExport/>
      <WhyChoose/>
      <FAQ/>
      <RequestQuote/>
    </div>
  )
}
