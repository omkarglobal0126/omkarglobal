"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Breadcrumbs from "@/app/components/hooks/Breadcrumbs";
import breadcrumbs_image from "@/public/components/about.jpg";
import { useEffect, useState } from "react";

export default function BuildTogether({ subCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products/subcategory/${encodeURIComponent(subCategory)}`)
      .then((res) => res.json())
      .then(setProducts);
  }, [subCategory]);

  return (
    <section className="bg-white">
      {/* Breadcrumbs */}
       <Breadcrumbs
        items={[
          {
            page: "Fruits",
            label: "Products",
            href: "",
            image: breadcrumbs_image,
          },
          { label: "Fruits" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            {/* Stats Card */}
            <div className="absolute top-4 left-4 lg:-top-6 lg:-left-6 bg-white shadow-lg rounded-xl px-5 py-3 z-10">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                8,800
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Industry Projects Completed
              </p>
            </div>

            {/* Main Image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                alt="Engineer Working"
                width={600}
                height={420}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Secondary Image (Desktop only) */}
            <div className="hidden lg:block absolute -bottom-14 -right-10 w-72 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                alt="Construction Site"
                width={300}
                height={220}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
              Welcome to Company
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Let’s Build Something <br />
              <span className="text-orange-500">Creative Together</span>
            </h2>

            <p className="text-gray-500 max-w-xl">
              30+ Years of working experience with global industries. There are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3">
              {[
                "Lorem Ipsum is not simply random text",
                "If you are going to use a passage",
                "Making this the first true generator on the Internet",
                "Various versions have evolved over the years",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* Signature */}
            <div className="flex items-center gap-4 pt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                  alt="Founder"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Kevin Martin</p>
                <p className="text-sm text-gray-500">Company Founder</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
