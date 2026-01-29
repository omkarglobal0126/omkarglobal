"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import about from "@/public/homepage/about.jpg";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 flex justify-center items-center bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center"
      >
        {/* Left Image */}
        <motion.div variants={item} className="relative max-lg:mb-8">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={about}
              alt="Logistics service"
              width={520}
              height={420}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div>
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
           Delivering Reliable Global  <br /> Trade Solutions
          </motion.h2>

          <motion.p variants={item} className="mt-6 text-gray-600">
            We are a professional Import–Export company specializing in
            sourcing, supplying, and distributing products across international
            markets.
          </motion.p>

          <motion.p variants={item} className="mt-2 mb-4 text-gray-600">
            With a strong understanding of global trade regulations and
            logistics, we ensure smooth and hassle-free transactions for our
            clients.
          </motion.p>
        
          {/* Points */}
          <motion.div
            variants={container}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              "Integrity & Transparency",
              "Customer-First Approach",
              "Quality Commitment",
              "Long-Term Partnerships",
            ].map((itemText) => (
              <motion.div
                key={itemText}
                variants={item}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">
                  ✓
                </span>
                <span className="font-medium">{itemText}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mt-8">
            <a
              href="/about"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold"
            >
              About Us
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
