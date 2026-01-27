"use client";

import { useEffect, useState } from "react";

export default function ProductGrid({ subCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `/api/products/subcategory/${encodeURIComponent(subCategory)}`
    )
      .then((res) => res.json())
      .then(setProducts);
  }, [subCategory]);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        {subCategory}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
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
          </div>
        ))}
      </div>

      {!products.length && (
        <p className="text-center text-gray-500 mt-10">
          No products found
        </p>
      )}
    </section>
  );
}
