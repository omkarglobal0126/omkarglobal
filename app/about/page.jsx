import React from 'react'
import Breadcrumbs from '../components/hooks/Breadcrumbs'
import About from './About'
import WorkingProcess from './WorkingProcess'
import Services from '../components/homepage/Services'
import RequestQuote from '../components/homepage/RequestQuote'
import breadcrumbs_image from "@/public/components/about.jpg";

export default function page() {
  return (
    <div> 
      <Breadcrumbs items={[{ label: "About", page:"About", image: breadcrumbs_image }]}/>
      <About/>
      <Services/>
      <WorkingProcess/>
      <RequestQuote/>
    </div>
  )
}