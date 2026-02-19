"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import services_img1 from "@/public/homepage/service1.jpg";
import services_img2 from "@/public/homepage/service2.jpg";
import services_img3 from "@/public/homepage/service3.jpg";
import services_img4 from "@/public/homepage/service4.jpg";

const services = [
  {
    title: "Fruits & Vegetables",
    desc: "Premium quality agricultural produce sourced from trusted farm.",
    image:
      "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952311/59440_qeriiv.jpg",
    top: "top-0",
    link: "/products",
  },
  {
    title: "Handicrafts & Decorative Products",
    desc: "Traditional and contemporary handicrafts crafted by skilled artisans, ideal for home décor and gifting.",
    image:
      "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952291/2150466783_sqtysw.jpg",
    top: "top-20 max-lg:top-0",
    link: "/products",
  },
  {
    title: "Lifestyle",
    desc: "Premium lifestyle products including home décor, handicrafts, kitchen essentials, and wellness items crafted for everyday comfort and modern living.",
    image:
      "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952252/2147645735_z1whnh.jpg",
    top: "top-0",
    link: "/products",
  },
  {
    title: "Fashion",
    desc: "Quality textiles, apparel, and imitation jewellery designed to match contemporary trends with reliable sourcing and consistent quality.",
    image:
      "https://res.cloudinary.com/dgybkwwys/image/upload/v1769952240/5974_vrlwrv.jpg",
    top: "top-20 max-lg:top-0",
    link: "/products",
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={card}
            className={`group relative h-[420px] overflow-hidden shadow-lg ${service.top}`}
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Default Bottom Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t to-black/10 from-black/80 text-white p-5 transition-all duration-500 group-hover:opacity-0">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p>Read More →</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-linear-to-t to-black/0 from-black/90 text-white p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
              <div>
                <h3 className="text-xl font-bold mt-3">{service.title}</h3>
                <p className="text-sm mt-3 leading-relaxed">{service.desc}</p>
                <a
                  href={service.link}
                  className="mt-5 inline-flex items-center gap-2 font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
