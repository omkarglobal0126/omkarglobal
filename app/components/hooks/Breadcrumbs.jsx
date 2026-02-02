"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Breadcrumbs({ items = [] }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full flex justify-center pt-4 max-lg:px-4 max-lg:pt-8 items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full relative overflow-hidden max-w-7xl py-24 mt-24 max-lg:mt-12 max-xl:py-10 rounded-2xl flex justify-center items-center shadow-xl"
      >
        {/* Background Image */}
        <Image
          className="absolute left-0 w-full h-full object-cover"
          src={items[0]?.image}
          alt=""
          fill
          priority
        />

        {/* Overlay */}
        <div className="w-full h-full bg-black/50 absolute left-0 top-0" />

        {/* Content */}
        <motion.div
          variants={container}
          className="flex justify-center text-white items-center flex-col gap-5 z-10"
        >
          <motion.h1
            variants={itemAnim}
            className="uppercase text-center text-5xl max-lg:text-3xl font-bold"
          >
            {items.map((item, index) => (
              <span key={index}>{item.page}</span>
            ))}
          </motion.h1>

          <motion.ul variants={itemAnim} className="flex gap-2 items-center">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={index} className="flex gap-2 items-center">
                  <ChevronRight size={18} />
                  {isLast ? (
                    <p className="text-white font-bold">{item.label}</p>
                  ) : (
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
