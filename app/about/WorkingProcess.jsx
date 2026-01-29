"use client";

import { motion } from "framer-motion";
import { Factory, Globe, TrendingUp, Handshake } from "lucide-react";

export default function WorkingProcess() {
  const steps = [
    {
      id: "01",
      title: "Production Of Fabric",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: Factory,
    },
    {
      id: "02",
      title: "Exportation Globally",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: Globe,
    },
    {
      id: "03",
      title: "Improve And Evolve",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: TrendingUp,
    },
    {
      id: "04",
      title: "Lasting Partnership",
      desc: "We build strong client relationships through regular contact and feedback.",
      icon: Handshake,
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Description Textiles Process
            <br className="hidden sm:block" />
            For Exceptional Results
          </h2>
        </motion.div>

        {/* STEPS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                variants={item}
                className="text-center flex flex-col items-center"
              >
                {/* ICON */}
                <div className="mb-5 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-400 flex items-center justify-center">
                  <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-black" />
                </div>

                {/* DIVIDER */}
                <div className="hidden sm:block w-full h-px bg-gray-200 mb-6" />

                {/* CONTENT */}
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {step.id}. {step.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
