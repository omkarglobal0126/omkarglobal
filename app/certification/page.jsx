import React from 'react'
import Breadcrumbs from '../components/hooks/Breadcrumbs'
import Certifications from './Certifications'
import breadcrumbs_image from "@/public/components/about.jpg";

export default function page() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Certification", page:"Certification", image: breadcrumbs_image }]}/>
      <Certifications/>
    </div>
  )
}
