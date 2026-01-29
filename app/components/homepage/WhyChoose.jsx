"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import whyChooseUs from "@/public/homepage/whyChooseUs.jpg";

export default function WhyChoose() {
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
    <section className="relative bg-white py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.h2
            variants={item}
            className="text-4xl font-bold leading-tight"
          >
            Why Choose <br />
            TransLogistics <span className="text-orange-500">PRO</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-gray-600 max-w-xl leading-relaxed"
          >
            We are committed to delivering excellence in every aspect of
            international trade. Our customer-focused approach, strong global
            network, and strict quality standards make us a trusted partner for
            import and export services.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul variants={container} className="mt-6 space-y-4">
            {[
              "High-Quality Products",
              "Global Trade Expertise",
              "On-Time & Secure Delivery",
              "Transparent Documentation",
              "Competitive Pricing",
             
              
            ].map((text, i) => (
              <motion.li
                key={i}
                variants={item}
                className="flex items-start gap-3"
              >
                <span className="text-orange-500 text-xl">➤</span>
                <span className="text-gray-700">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

         
        </div>

        {/* RIGHT IMAGE */}
        <motion.div variants={item} className="relative flex justify-center">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={whyChooseUs}
              alt="Warehouse management"
              width={600}
              height={700}
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            variants={item}
            className="absolute bottom-10 -left-20 bg-white shadow-xl rounded-xl p-6 w-72 hidden md:block"
          >
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full mb-4">
              👍
            </div>
            <h4 className="font-semibold text-lg">
              Expanding Businesses  <br /> Beyond Borders
            </h4>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
             To simplify international trade by providing reliable, efficient, and ethical import–export solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
      >
        ↑
      </motion.div>
    </section>
  );
}
