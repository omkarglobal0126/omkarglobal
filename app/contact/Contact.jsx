"use client";

import { Phone, Mail, MapPin, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const infoCards = [
    {
      title: "Hotline Number",
      desc: ["Phone: +91 9109803735"],
      icon: Phone,
    },
    {
      title: "Support Email",
      desc: ["dewanganakashdeep97@gmail.com"],
      icon: Mail,
    },
    {
      title: "Office Address",
      desc: ["Bhanpuri, Raipur Chhattisgarh"],
      icon: MapPin,
    },
    {
      title: "Working Days",
      desc: ["Mon – Sun: 24 hour"],
      icon: CalendarDays,
    },
  ];

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
    <section className="bg-gray-50 py-24">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4"
      >
        {/* TOP INFO CARDS */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {infoCards.map((itemData, index) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                <h4 className="font-bold text-gray-900 mb-2">
                  {itemData.title}
                </h4>

                {itemData.desc.map((line, i) => (
                  <p key={i} className="text-sm text-gray-600">
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CONTACT FORM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <motion.div variants={container}>
            <motion.span
              variants={item}
              className="text-sm font-semibold text-orange-500 flex items-center gap-2 mb-4"
            >
              ✦ 01. LET’S CONNECT
            </motion.span>

            <motion.h2
              variants={item}
              className="text-4xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Contact Us & Get <br /> In Here Touch !
            </motion.h2>

            <motion.p variants={item} className="text-gray-600 max-w-md">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration some form, by injected
              humour.
            </motion.p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div variants={container}>
            <motion.h3
              variants={item}
              className="text-xl font-bold text-gray-900 mb-6"
            >
              Send Your Message
            </motion.h3>

            <motion.form variants={container} className="space-y-5">
              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
              </motion.div>

              <motion.div
                variants={item}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
                <input
                  type="text"
                  placeholder="Services"
                  className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm focus:outline-none focus:border-orange-400"
                />
              </motion.div>

              <motion.textarea
                variants={item}
                rows="4"
                placeholder="Message Here..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-sm focus:outline-none focus:border-orange-400"
              />

              <motion.button
                variants={item}
                type="submit"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Submit
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
