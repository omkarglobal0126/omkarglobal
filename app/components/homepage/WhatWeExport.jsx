"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import { PiGrainsDuotone } from "react-icons/pi";
import { GiFruitBowl, GiClothes, GiJewelCrown } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SiSnapcraft } from "react-icons/si";
import { RiCopperCoinLine } from "react-icons/ri";
import { FaKitchenSet } from "react-icons/fa6";
import { MdFaceRetouchingNatural } from "react-icons/md";

const exportsData = [
  {
    title: "Grains & Cereals",
    desc: "We supply high-quality grains and cereals sourced from trusted farms, ensuring purity, nutritional value, and compliance with international food standards.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952317/2150170288_mnv2ot.jpg",
    link: "/products/Grains & Cereals",
    icon: <PiGrainsDuotone />,
  },
  {
    title: "Fruits",
    desc: "Our fresh fruits are carefully selected, hygienically packed, and exported to retain natural taste, freshness, and nutritional richness.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952278/142098_m9os07.jpg",
    link: "/products/Fruits",
    icon: <GiFruitBowl />,
  },
  {
    title: "Vegetables",
    desc: "We export farm-fresh vegetables that meet global quality requirements, ensuring freshness, safety, and timely delivery to international markets.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952257/103355_l3ya0z.jpg",
    link: "/products/Vegetables",
    icon: <LuVegan />,
  },
  {
    title: "Handicrafts & Decorative",
    desc: "Our handcrafted and decorative items reflect rich Indian craftsmanship, designed with precision and creativity for global buyers.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952200/2151680946_qnkcvk.jpg",
    link: "/products/Handicrafts & Decorative",
    icon: <SiSnapcraft />,
  },
  {
    title: "Copper Products",
    desc: "We offer premium copper products known for their durability, traditional value, and health benefits, crafted by skilled artisans.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952190/4558_wkqb5i.jpg",
    link: "/products/Copper Products",
    icon: <RiCopperCoinLine />,
  },
  {
    title: "Kitchenware & Cutlery",
    desc: "Our kitchenware and cutlery products combine functionality with quality materials, designed to meet international usage and safety standards.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952161/2149491446_vizmco.jpg",
    link: "/products/Kitchenware & Cutlery",
    icon: <FaKitchenSet />,
  },
  {
    title: "Textiles & Apparel",
    desc: "We export quality textiles and apparel featuring superior fabrics, modern designs, and reliable stitching suitable for global markets.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952196/1034_kjgd9o.jpg",
    link: "/products/Textiles & Apparel",
    icon: <GiClothes />,
  },
  {
    title: "Imitation Jewellery",
    desc: "Our imitation jewellery offers elegant designs, fine finishing, and affordability, making it popular across international fashion markets.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952189/4326_gi4ct4.jpg",
    link: "/products/Imitation Jewellery",
    icon: <GiJewelCrown />,
  },
  {
    title: "Beauty Products",
    desc: "We supply carefully formulated beauty products that meet quality, safety, and packaging standards required for international trade.",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952158/2151053864_mazbju.jpg",
    link: "/products/Beauty Products",
    icon: <MdFaceRetouchingNatural />,
  },
];

export default function WhatWeExport() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Export
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exportsData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex">
                <div className="px-4 h-18 text-3xl rounded-b-full bg-orange-500 flex items-center justify-center text-white">
                  {item.icon}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-orange-600">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 mt-5 font-medium hover:text-orange-600 transition"
                  >
                    View Details <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
