"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import faq from "@/public/homepage/faq.jpg";

const faqs = [
  {
    q: "What products do you deal in?",
    a: "We deal in a wide range of products including agricultural goods, spices, food products, textiles, industrial materials, and general trading items. Custom product sourcing is also available based on client requirements.",
  },
  {
    q: "Which countries do you export to and import from?",
    a: "We work with multiple international markets across Asia, the Middle East, Europe, and Africa. Our global network allows us to expand trade routes based on client needs.",
  },
  {
    q: "How do you ensure product quality?",
    a: "All products undergo strict quality checks before shipment. We follow international quality standards, proper packaging methods, and compliance procedures to ensure safe and reliable delivery.",
  },
  {
    q: "Do you handle documentation and customs clearance?",
    a: "Yes, we provide complete support for import-export documentation, customs clearance, and regulatory compliance to ensure a smooth and hassle-free trading process.",
  },
  {
    q: "How can I place an order or request a quote?",
    a: "You can contact us through our website, email, or phone. Share your product details, quantity, and destination, and our team will get back to you with a customized quotation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT FAQ */}
        <div>
         

          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mt-2 mb-8"
          >
            Frequently Asked <span className="text-orange-500">Questions</span>
          </motion.h2>

          <motion.div variants={container} className="space-y-4">
            {faqs.map((faqItem, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center p-4 text-left font-medium"
                >
                  <span>{faqItem.q}</span>
                  <span className="text-orange-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 text-gray-600 text-sm transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 pb-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {faqItem.a}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div variants={item} className="relative">
          <Image
            src={faq}
            alt="Logistics Truck"
            width={600}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
