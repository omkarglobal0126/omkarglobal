"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import hero from "@/public/homepage/hero.jpg";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex pt-5 items-center">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Logistics background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10"
        >
          <div className="text-white text-center lg:text-left">
            <motion.span
              variants={item}
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm mb-4"
            >
              Smart, Swift, Seamless
            </motion.span>

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Explore Our Wide Range of Products
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-gray-200 max-w-xl mx-auto lg:mx-0"
            >
              We offer a diverse portfolio of high-quality products sourced with
              strict quality standards to meet domestic and international market
              demands.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 rounded-lg font-semibold text-center"
              >
                Contact Us
              </a>

              <a
                href="/about"
                className="border border-white hover:bg-white hover:text-black transition px-7 py-3 rounded-lg font-semibold text-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
