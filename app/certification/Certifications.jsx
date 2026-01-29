"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  { name: "DGFT", img: "/certifications/dgft.png" },
  { name: "APEDA", img: "/certifications/apeda.png" },
  { name: "MSME", img: "/certifications/msme.png" },
  { name: "GST", img: "/certifications/gst.png" },
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
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl w-full px-6"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Our Certifications & Memberships
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            OES Export Import Pvt Ltd is recognized by the Government of India and
            adheres to international trade standards.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12"
        >
          {certifications.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center group transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative shadow w-full h-90 md:w-70 md:h-80 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={itemData.img}
                  alt={itemData.name}
                  fill
                  className="object-contain"
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
