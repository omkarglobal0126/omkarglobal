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
  Layers
} from "lucide-react";

const SUB_CATEGORIES = {
  "Food & Agriculture": ["Grains & Cereals", "Fruits", "Vegetables", "Grocery Products"],
  "Handicrafts & Industrial": ["Handicrafts & Decorative", "Copper Products", "Kitchenware & Cutlery", "Furniture Products"],
  "Lifestyle & Fashion": ["Textiles & Apparel", "Imitation Jewellery", "Beauty Products"],
};

const CATEGORY_COLORS = {
  "Food & Agriculture": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Handicrafts & Industrial": "bg-amber-100 text-amber-700 border-amber-200",
  "Lifestyle & Fashion": "bg-purple-100 text-purple-700 border-purple-200",
};

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
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

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const resetForm = () => {
    setForm({ name: "", category: "", subCategory: "", images: "", description: "" });
    setEditingId(null);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);

  const url = editingId ? `/api/products/${editingId}` : "/api/products";
  const method = editingId ? "PUT" : "POST";

  // ✅ convert string → array
  const payload = {
    ...form,
    images: form.images
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean),
  };

  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("API Error:", data);
      throw new Error(data.error || "Failed");
    }

    resetForm();
    fetchProducts();
  } catch (err) {
    alert(err.message);
  } finally {
    setSubmitting(false);
  }
};


  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => filterCategory === "All" || p.category === filterCategory)
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  }, [products, searchTerm, filterCategory, sortOrder]);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 text-slate-900">
      <div className="max-w-7xl mx-auto grid pt-20 grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        
        {/* LEFT COLUMN: LISTING */}
        <div className="space-y-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Inventory</h1>
              <p className="text-slate-500 mt-1">Manage, filter, and update your product catalog.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all w-full md:w-64"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
                className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                title="Sort Order"
              >
                <ArrowUpDown className={`w-4 h-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </header>

          <nav className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {["All", ...Object.keys(SUB_CATEGORIES)].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  filterCategory === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {loading ? (
              <div className="py-24 flex flex-col items-center justify-center text-slate-400">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-blue-500" />
                <p className="animate-pulse">Loading inventory...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Product Details</th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Category</th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Sub-Category</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map((p) => (
                      <tr key={p._id} className="group hover:bg-slate-50/80 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-800">{p.name}</div>
                          <div className="text-xs text-slate-400 truncate max-w-[200px]">{p.description || "No description"}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${CATEGORY_COLORS[p.category] || 'bg-slate-100'}`}>
                            {p.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 italic">{p.subCategory}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2  transition-opacity">
                            <button
                              onClick={() => { setEditingId(p._id); setForm({ ...p, images: p.images?.join(", ") || "" }); }}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(p._id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <Package className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No products found</h3>
                <p className="text-slate-500">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY FORM */}
        <div className="lg:h-screen lg:sticky lg:top-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex gap-2 items-center">
                {editingId ? <Pencil className="w-5 h-5 text-blue-500" /> : <PlusCircle className="w-5 h-5 text-emerald-500" />}
                {editingId ? "Edit Product" : "New Product"}
              </h2>
              {editingId && (
                <button onClick={resetForm} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Product Name</label>
                <input
                  required
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Organic Quinoa"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> Category
                  </label>
                  <select
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl bg-white focus:ring-2 focus:ring-blue-500/20 outline-none appearance-none"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value, subCategory: "" })}
                  >
                    <option value="">Choose Category</option>
                    {Object.keys(SUB_CATEGORIES).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Sub-Category
                  </label>
                  <select
                    required
                    disabled={!form.category}
                    className="w-full border border-slate-200 p-3 rounded-xl bg-white disabled:bg-slate-50 focus:ring-2 focus:ring-blue-500/20 outline-none"
                    value={form.subCategory}
                    onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                  >
                    <option value="">{form.category ? "Choose Sub-category" : "Select Category First"}</option>
                    {SUB_CATEGORIES[form.category]?.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
<div className="space-y-1">
  <label className="text-xs font-bold text-slate-500 uppercase px-1">
    Image URLs (comma separated)
  </label>
  <input
    required
    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none"
    placeholder="https://img1.jpg, https://img2.jpg"
    value={form.images}
    onChange={(e) => setForm({ ...form, images: e.target.value })}
  />
</div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase px-1">Description</label>
                <textarea
                  rows="3"
                  className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Tell us about this product..."
                />
              </div>

              <button
                disabled={submitting}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 ${
                  submitting ? "bg-slate-400 cursor-not-allowed" : editingId ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"
                }`}
              >
                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : editingId ? "Update Product" : "Save Product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}