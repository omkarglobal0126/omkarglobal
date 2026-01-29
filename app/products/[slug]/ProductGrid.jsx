"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductGrid({ subCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/products/subcategory/${encodeURIComponent(subCategory)}`)
      .then((res) => res.json())
      .then(setProducts);
  }, [subCategory]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-10"
      >
        {subCategory}
      </motion.h1>

      {/* Products Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {products.map((p) => (
          <motion.div
            key={p._id}
            variants={card}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 font-semibold">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.category}</p>
          </motion.div>
        ))}
      </motion.div>

      {!products.length && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}
    </section>
  );
}
