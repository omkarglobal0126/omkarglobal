"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProduct({ params }) {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, [params.id]);

  const handleUpdate = async () => {
    await fetch(`/api/products/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    router.push("/products");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 space-y-4 max-w-4xl">
      <h1 className="text-2xl font-bold">Edit Category</h1>

      <input
        value={data.category}
        onChange={(e) =>
          setData({ ...data, category: e.target.value })
        }
        className="border p-2 w-full"
      />

      {data.subCategories.map((sub, i) => (
        <div key={i} className="border p-4 space-y-2">
          <input
            value={sub.title}
            onChange={(e) => {
              const updated = [...data.subCategories];
              updated[i].title = e.target.value;
              setData({ ...data, subCategories: updated });
            }}
            className="border p-2 w-full"
          />
        </div>
      ))}

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}
