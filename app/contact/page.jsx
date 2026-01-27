import React from 'react'
import Contact from './Contact'
import Breadcrumbs from '../components/hooks/Breadcrumbs'

export default function page() {
  return (
    <div>
        <Breadcrumbs items={[{ label: "Contact", page:"Contact"  }]}/>
      <Contact/>
        <section className="w-full">
      <div className="w-full h-[400px] lg:h-[500px] relative">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps?q=401%20Broadway,%20New%20York&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
    </div>
  )
}
