"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Search,
  PlusCircle,
  ArrowUpDown,
  Loader2,
  Package,
  Pencil,
  Trash2,
  X,
  Tag,
  Layers,
  Image as ImageIcon,
} from "lucide-react";

const SUB_CATEGORIES = {
  "Food & Agriculture": [
    "Grains & Cereals",
    "Fruits",
    "Vegetables",
    "Grocery Products",
  ],
  "Handicrafts & Industrial": [
    "Handicrafts & Decorative",
    "Copper Products",
    "Kitchenware & Cutlery",
    "Furniture Products",
  ],
  "Lifestyle & Fashion": [
    "Textiles & Apparel",
    "Imitation Jewellery",
    "Beauty Products",
  ],
};

const CATEGORY_COLORS = {
  "Food & Agriculture": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Handicrafts & Industrial":
    "bg-amber-100 text-amber-700 border-amber-200",
  "Lifestyle & Fashion":
    "bg-purple-100 text-purple-700 border-purple-200",
};

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    subCategory: "",
    images: "",
    description: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.url; // Cloudinary CDN URL
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...form,
      images: form.images
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    };

    const url = editingId
      ? `/api/products/${editingId}`
      : "/api/products";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Something went wrong");
    }

    resetForm();
    fetchProducts();
    setSubmitting(false);
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      subCategory: "",
      images: "",
      description: "",
    });
    setEditingId(null);
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id) => {
    if (!confirm("Delete this product?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  /* ---------------- FILTER ---------------- */
  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (p) => filterCategory === "All" || p.category === filterCategory
      )
      .filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [products, searchTerm, filterCategory, sortOrder]);

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-slate-50 p-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        {/* LIST */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-extrabold">Products</h1>
            <button
              onClick={() =>
                setSortOrder((p) => (p === "asc" ? "desc" : "asc"))
              }
              className="p-2 bg-white border rounded-lg"
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>

          <input
            placeholder="Search..."
            className="w-full border p-3 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="bg-white rounded-xl border overflow-hidden">
            {loading ? (
              <div className="py-20 text-center">
                <Loader2 className="animate-spin mx-auto" />
              </div>
            ) : (
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4">Category</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((p) => (
                    <tr key={p._id} className="border-t">
                      <td className="p-4 flex gap-3 items-center">
                        {p.images?.[0] ? (
                          <img
                            src={p.images[0]}
                            className="w-12 h-12 object-cover rounded-lg border"
                          />
                        ) : (
                          <ImageIcon className="w-10 h-10 text-gray-300" />
                        )}
                        <div>
                          <div className="font-bold">{p.name}</div>
                          <div className="text-xs text-gray-400">
                            {p.subCategory}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 text-xs rounded-md border ${CATEGORY_COLORS[p.category]}`}
                        >
                          {p.category}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            setEditingId(p._id);
                            setForm({
                              ...p,
                              images: p.images.join(", "),
                            });
                          }}
                          className="mr-2 text-blue-600"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(p._id)}
                          className="text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl border h-fit sticky top-20">
          <h2 className="text-xl font-bold mb-4">
            {editingId ? "Edit Product" : "Add Product"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              placeholder="Product name"
              className="w-full border p-3 rounded-xl"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <select
              required
              className="w-full border p-3 rounded-xl"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                  subCategory: "",
                })
              }
            >
              <option value="">Select Category</option>
              {Object.keys(SUB_CATEGORIES).map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              required
              className="w-full border p-3 rounded-xl"
              value={form.subCategory}
              onChange={(e) =>
                setForm({ ...form, subCategory: e.target.value })
              }
            >
              <option value="">Select Sub Category</option>
              {SUB_CATEGORIES[form.category]?.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            {/* IMAGE UPLOAD */}
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full border p-3 rounded-xl"
              onChange={async (e) => {
                setUploading(true);
                const urls = [];
                for (let file of Array.from(e.target.files)) {
                  const url = await uploadImage(file);
                  urls.push(url);
                }
                setForm((p) => ({
                  ...p,
                  images: urls.join(","),
                }));
                setUploading(false);
              }}
            />

            {uploading && (
              <p className="text-xs text-blue-500">
                Uploading images...
              </p>
            )}

            {/* PREVIEW */}
            <div className="flex gap-2 flex-wrap">
              {form.images
                .split(",")
                .filter(Boolean)
                .map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                ))}
            </div>

            <textarea
              placeholder="Description"
              className="w-full border p-3 rounded-xl"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-black text-white font-bold"
            >
              {submitting ? "Saving..." : "Save Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
