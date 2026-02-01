"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/public/about/hero.jpg";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const leftImage = {
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
    <section className="py-20 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <motion.div variants={leftImage} className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://res.cloudinary.com/dgybkwwys/image/upload/v1769952126/2149128344_rx1zmm.jpg"
                alt="Factory Interior"
                width={700}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div variants={container}>
            <motion.h2
              variants={item}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
             Delivering Reliable Global  <br /> Trade Solutions
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed mb-2 max-w-xl"
            >
              We are a multi-product business committed to delivering quality,
              reliability, and value across a wide range of industries. Based in
              Bhanpuri, Raipur, Chhattisgarh, we specialize in sourcing and
              supplying premium products that meet the needs of domestic and
              commercial markets.
            </motion.p>

            <motion.p
              variants={item}
              className="text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              Our product portfolio includes food and agricultural products such
              as grains, cereals, fruits, vegetables, and grocery essentials,
              carefully selected to ensure freshness, purity, and consistent
              quality. Alongside food products, we offer a diverse range of
              handicrafts and decorative items, copper products, textiles and
              apparel, imitation jewellery and precious stones, kitchenware and
              cutlery, furniture products, and beauty products.
            </motion.p>

            {/* FEATURES LIST */}
            <motion.ul variants={container} className="space-y-4 mb-10">
              {[
                "Integrity & Transparency",
              "Customer-First Approach",
              "Quality Commitment",
              "Long-Term Partnerships",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-center gap-3"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* BUTTON */}
            <motion.div variants={item} className="flex items-center gap-6">
              <button className="bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
