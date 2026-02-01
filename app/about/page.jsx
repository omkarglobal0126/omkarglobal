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
      <Breadcrumbs items={[{ label: "About", page:"About", image: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952221/2151998695_wyvqa3.jpg" }]}/>
      <About/>
      <Services/>
      <WorkingProcess/>
      <RequestQuote/>
    </div>
  )
}