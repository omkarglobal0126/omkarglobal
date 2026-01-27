"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProduct() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  const addSubCategory = () => {
    setSubCategories([
      ...subCategories,
      { title: "", products: [] },
    ]);
  };

  const addProduct = (index) => {
    if (subCategories[index].products.length >= 10) return;

    const updated = [...subCategories];
    updated[index].products.push({ name: "", image: "" });
    setSubCategories(updated);
  };

  const handleSubmit = async () => {
    const payload = { category, subCategories };

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    router.push("/products");
  };

  return (
    <div className="p-6 space-y-4 max-w-4xl">
      <h1 className="text-2xl font-bold">Create Category</h1>

      <input
        placeholder="Category Name"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full"
      />

      {subCategories.map((sub, i) => (
        <div key={i} className="border p-4 space-y-2">
          <input
            placeholder="Subcategory Title"
            value={sub.title}
            onChange={(e) => {
              const updated = [...subCategories];
              updated[i].title = e.target.value;
              setSubCategories(updated);
            }}
            className="border p-2 w-full"
          />

          {sub.products.map((p, j) => (
            <div key={j} className="flex gap-2">
              <input
                placeholder="Product Name"
                value={p.name}
                onChange={(e) => {
                  const updated = [...subCategories];
                  updated[i].products[j].name = e.target.value;
                  setSubCategories(updated);
                }}
                className="border p-2 w-1/2"
              />
              <input
                placeholder="Image URL"
                value={p.image}
                onChange={(e) => {
                  const updated = [...subCategories];
                  updated[i].products[j].image = e.target.value;
                  setSubCategories(updated);
                }}
                className="border p-2 w-1/2"
              />
            </div>
          ))}

          <button
            onClick={() => addProduct(i)}
            className="text-sm text-blue-600"
          >
            + Add Product (max 10)
          </button>
        </div>
      ))}

      <button
        onClick={addSubCategory}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        + Add Subcategory
      </button>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
