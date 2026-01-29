"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const leftAnim = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE SECTION */}
          <motion.div variants={leftAnim} className="relative">
            {/* Stats Card */}
            <motion.div
              variants={item}
              className="absolute top-4 left-4 lg:-top-6 lg:-left-6 bg-white shadow-lg rounded-xl px-5 py-3 z-10"
            >
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                8,800
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Industry Projects Completed
              </p>
            </motion.div>

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

            {/* Secondary Image */}
            <motion.div
              variants={item}
              className="hidden lg:block absolute -bottom-14 -right-10 w-72 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
                alt="Construction Site"
                width={300}
                height={220}
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT SECTION */}
          <motion.div variants={container} className="space-y-6">
          

            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            >
              Let’s Build Something <br />
              <span className="text-orange-500">Creative Together</span>
            </motion.h2>

            <motion.p variants={item} className="text-gray-500 max-w-xl">
              30+ Years of working experience with global industries. There are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form.
            </motion.p>

            {/* Bullet Points */}
            <motion.ul variants={container} className="space-y-3">
              {[
                "International quality standards.",
                "Safe and hygienic packaging.",
                "Complete export documentation.",
                "Flexible order quantities.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1 shrink-0" />
                  <span className="text-gray-600">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

       
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
