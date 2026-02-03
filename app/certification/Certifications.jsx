"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "FSSAI",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770134619/WhatsApp_Image_2026-02-03_at_11.30.16_AM_gvd4bm.jpg",
  },
  {
    name: "MSME",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770134617/WhatsApp_Image_2026-02-03_at_11.30.33_AM_frlhqo.jpg",
  },
  {
    name: "DGFT",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770134616/WhatsApp_Image_2026-02-03_at_11.27.39_AM_fqujx8.jpg",
  },
  {
    name: "APEDA",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770134615/WhatsApp_Image_2026-02-03_at_11.29.30_AM_tqj6ap.jpg",
  },
  {
    name: "GST",
    img: "https://res.cloudinary.com/dgybkwwys/image/upload/v1770134614/WhatsApp_Image_2026-02-03_at_11.29.02_AM_l9w2vv.jpg",
  },
];

export default function Certifications() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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
    <section className="py-20 bg-white flex justify-center items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl w-full px-6"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Our Certifications & Memberships
          </h2>

          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4" />

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Omkar Global Export Import is recognized by the Government of India
            and adheres to international trade standards.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
        >
          {certifications.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center group transition-opacity duration-300 hover:opacity-80"
            >
              {/* IMPORTANT FIX: valid Tailwind heights */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 shadow">
                <Image
                  src={itemData.img}
                  alt={itemData.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <span className="mt-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
                {itemData.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
