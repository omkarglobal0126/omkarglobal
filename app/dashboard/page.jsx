"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  Search,
  PlusCircle,
  ArrowUpDown,
  Loader2,
  Pencil,
  Trash2,
  Image as ImageIcon,
  Upload,
  X,
  Package,
} from "lucide-react";

const SUB_CATEGORIES = {
  "Food & Agriculture": ["Grains & Cereals", "Fruits", "Vegetables", "Grocery Products"],
  "Handicrafts & Industrial": ["Handicrafts & Decorative", "Copper Products", "Kitchenware & Cutlery", "Furniture Products"],
  "Lifestyle & Fashion": ["Textiles & Apparel", "Imitation Jewellery", "Beauty Products"],
};

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    subCategory: "",
    images: [],
    description: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    const data = await res.json();
    return data.url;
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setUploading(true);
    const urls = [];
    for (const file of files) {
      try {
        const url = await uploadImage(file);
        urls.push(url);
      } catch (err) {
        console.error("Upload failed");
      }
    }
    setForm((p) => ({ ...p, images: [...p.images, ...urls] }));
    setUploading(false);
  };

  const removeImage = (index) => {
    setForm((p) => ({
      ...p,
      images: p.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.images.length === 0) return alert("Please upload at least one image");

    setSubmitting(true);
    const url = editingId ? `/api/products/${editingId}` : "/api/products";
    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      resetForm();
      fetchProducts();
    }
    setSubmitting(false);
  };

  const resetForm = () => {
    setForm({ name: "", category: "", subCategory: "", images: [], description: "" });
    setEditingId(null);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) =>
        sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      );
  }, [products, searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-10 lg:px-8">
        
        {/* HEADER */}
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Inventory</h1>
            <p className="text-slate-500 mt-1">Manage your product catalog and assets.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
             <div className="relative group flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl w-full md:w-64 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button
                onClick={() => setSortOrder((p) => (p === "asc" ? "desc" : "asc"))}
                className="flex items-center justify-center p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                title="Sort Order"
              >
                <ArrowUpDown className={`w-5 h-5 ${sortOrder === 'asc' ? 'text-blue-600' : 'text-slate-600'}`} />
                <span className="sm:hidden ml-2 text-sm font-medium">Sort List</span>
              </button>
          </div>
        </header>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-10 items-start">
          
          {/* SIDEBAR FORM (Moves to top on mobile for easy access) */}
          <aside className="lg:sticky lg:top-10 order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl lg:shadow-md p-5 md:p-6 overflow-hidden relative">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  {editingId ? <Pencil className="w-5 h-5 text-blue-500" /> : <PlusCircle className="w-5 h-5 text-green-500" />}
                  {editingId ? "Update Product" : "New Product"}
                </h2>
                {editingId && (
                  <button onClick={resetForm} className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wider">Cancel</button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block ml-1">Title</label>
                  <input
                    required
                    placeholder="E.g. Organic Basmati Rice"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block ml-1">Category</label>
                    <select
                      required
                      className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white transition-all text-sm appearance-none"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value, subCategory: "" })}
                    >
                      <option value="">Select Category</option>
                      {Object.keys(SUB_CATEGORIES).map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block ml-1">Sub-Category</label>
                    <select
                      required
                      disabled={!form.category}
                      className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none bg-white transition-all text-sm disabled:bg-slate-50 disabled:text-slate-400 appearance-none"
                      value={form.subCategory}
                      onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
                    >
                      <option value="">Select Sub</option>
                      {SUB_CATEGORIES[form.category]?.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block ml-1">Images</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:bg-blue-50/50 hover:border-blue-300 cursor-pointer transition-all group"
                  >
                    <Upload className="w-6 h-6 mx-auto mb-2 text-slate-400 group-hover:text-blue-500" />
                    <p className="text-xs font-medium text-slate-500">Tap to upload photos</p>
                    <input type="file" ref={fileInputRef} hidden multiple accept="image/*" onChange={handleImageUpload} />
                  </div>
                  
                  {uploading && <div className="mt-2 flex items-center gap-2 text-blue-500 text-xs font-medium"><Loader2 className="w-3 h-3 animate-spin" /> Processing images...</div>}

                  <div className="flex gap-2 flex-wrap mt-3">
                    {form.images.map((img, i) => (
                      <div key={i} className="relative group w-16 h-16">
                        <img src={img} className="w-full h-full object-cover rounded-lg border border-slate-200" alt="Preview" />
                        <button 
                          type="button"
                          onClick={() => removeImage(i)}
                          className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full p-0.5 shadow-lg lg:opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase mb-1.5 block ml-1">Description</label>
                  <textarea
                    placeholder="Describe the product details..."
                    rows={3}
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm resize-none"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                <button
                  disabled={submitting || uploading}
                  className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-lg shadow-slate-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                  {editingId ? "Update Product" : "Create Product"}
                </button>
              </form>
            </div>
          </aside>

          {/* PRODUCT LIST (Moves to bottom on mobile) */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden order-2 lg:order-1">
            {loading ? (
              <div className="py-24 flex flex-col items-center justify-center text-slate-400">
                <Loader2 className="animate-spin w-10 h-10 mb-4" />
                <p className="text-sm font-medium">Loading products...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Product Details</th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Category</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredProducts.map((p) => (
                      <tr key={p._id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                              {p.images?.[0] ? (
                                <img src={p.images[0]} className="w-full h-full object-cover" alt={p.name} />
                              ) : (
                                <ImageIcon className="w-full h-full p-3 text-slate-300" />
                              )}
                            </div>
                            <div className="max-w-[150px] md:max-w-none">
                              <div className="font-bold text-slate-800 truncate">{p.name}</div>
                              <div className="text-xs font-medium text-slate-400 truncate">{p.subCategory}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 whitespace-nowrap">
                            {p.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-1 md:gap-2">
                            <button
                              onClick={() => {
                                setEditingId(p._id);
                                setForm({ ...p, description: p.description || "" });
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                            >
                              <Pencil size={18} />
                            </button>
                            <button
                              onClick={() => { if(confirm("Delete this product?")) fetch(`/api/products/${p._id}`, { method: "DELETE" }).then(fetchProducts) }}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-24 text-center px-4">
                <Package className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900">No products found</h3>
                <p className="text-slate-500">Try adjusting your search or add a new product.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}