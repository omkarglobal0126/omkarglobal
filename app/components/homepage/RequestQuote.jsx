"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import contactUs from "@/public/homepage/contactUs.jpg";

export default function RequestQuote() {
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
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://res.cloudinary.com/dgybkwwys/image/upload/v1769952169/132340_dv9llz.jpg"
          alt="Logistics background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT (empty / future image or content) */}
        <motion.div variants={item} className="flex justify-center" />

        {/* RIGHT FORM */}
        <motion.div
          variants={item}
          className="bg-white/95 rounded-xl p-8 shadow-xl"
        >
          <motion.span
            variants={item}
            className="text-orange-500 font-semibold uppercase text-sm"
          >
            Request Quote
          </motion.span>

          <motion.h2
            variants={item}
            className="text-3xl font-bold mt-2 mb-6"
          >
            Request Quote Form
          </motion.h2>

          <motion.form
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.input
              variants={item}
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <motion.input
              variants={item}
              type="email"
              placeholder="Email Address"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <motion.input
              variants={item}
              type="text"
              placeholder="Phone Number"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <motion.input
              variants={item}
              type="text"
              placeholder="City / Location"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />

            <motion.select
              variants={item}
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            >
              <option>Freight Type</option>
              <option>Road Freight</option>
              <option>Sea Freight</option>
              <option>Air Freight</option>
              <option>Rail Transport</option>
            </motion.select>

            <motion.input
              variants={item}
              type="number"
              placeholder="Weight (kg)"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />

            <motion.textarea
              variants={item}
              placeholder="Message"
              rows="3"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500 md:col-span-2"
            />

            <motion.button
              variants={item}
              type="submit"
              className="md:col-span-2 bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold"
            >
              Request Quote
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
