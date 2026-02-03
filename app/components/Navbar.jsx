"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      {/* TOP BAR */}
      <div className="bg-slate-950 text-gray-300 text-sm">
        <div className="max-w-7xl max-lg:hidden mx-auto px-6 py-2 flex flex-col md:flex-row justify-between gap-2">
          <div className="flex flex-wrap gap-4">
            <a href="tel:919109803735" className="flex gap-1 items-center">
              <IoCall /> +91 9109803735
            </a>
            <a
              href="mailto:info@omkarglobalexim.com"
              className="flex gap-1 items-center"
            >
              <IoMdMail /> info@omkarglobalexim.com
            </a>
          </div>
          <span className="flex items-center gap-1">
            <FaClock /> Mon – Sun: 24 hour
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-slate-900/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="text-2xl font-bold">
            Omkar <span className="text-orange-500">Global</span>
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {["Home", "About"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative hover:text-orange-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 hover:after:w-full after:transition-all"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* PRODUCTS DROPDOWN */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500">
                Products
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition" />
              </button>

              <div className="absolute left-0 top-full pt-5 w-[640px] text-gray-800 rounded-2xl shadow-xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition">
                <div className="bg-white rounded-lg">
                  <div className="grid grid-cols-3 gap-8 p-8 text-sm">
                    {PRODUCT_COLUMNS.map((col) => (
                      <div key={col.title}>
                        <h4 className="font-bold mb-3">{col.title}</h4>
                        <ul className="space-y-2">
                          {col.links.map(([label, href]) => (
                            <li key={label}>
                              <a
                                href={href}
                                className="hover:text-orange-500"
                              >
                                {label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a
                href="/certification"
                className="hover:text-orange-500 transition"
              >
                Certificates
              </a>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <a
            href="/contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold"
          >
            Contact Us
          </a>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-slate-900 transition-all ${
            open
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="px-6 py-6 space-y-4">
            <li>
              <a href="/" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            {/* MOBILE PRODUCTS */}
            <li>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between w-full"
              >
                Products
                <ChevronDown
                  className={`transition ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productsOpen && (
                <div className="pl-4 pt-3 space-y-4 text-sm">
                  {PRODUCT_COLUMNS.map((col) => (
                    <div key={col.title}>
                      <p className="font-semibold text-orange-400">
                        {col.title}
                      </p>
                      <ul className="space-y-2 mt-2">
                        {col.links.map(([label, href]) => (
                          <li key={label}>
                            <a href={href} onClick={() => setOpen(false)}>
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a href="/services" onClick={() => setOpen(false)}>
                Services
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="block text-center bg-orange-500 py-2 rounded-lg"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* PRODUCT DATA */
const PRODUCT_COLUMNS = [
  {
    title: "Food & Agriculture",
    links: [
      ["Grains & Cereals", "/products/Grains & Cereals"],
      ["Fruits", "/products/Fruits"],
      ["Vegetables", "/products/Vegetables"],
      ["Grocery Products", "/products/Grocery Products"],
    ],
  },
  {
    title: "Handicrafts & Industrial",
    links: [
      ["Handicrafts & Decorative", "/products/Handicrafts & Decorative"],
      ["Copper Products", "/products/Copper Products"],
      ["Kitchenware & Cutlery", "/products/Kitchenware & Cutlery"],
      ["Furniture Products", "/products/Furniture Products"],
    ],
  },
  {
    title: "Lifestyle & Fashion",
    links: [
      ["Textiles & Apparel", "/products/Textiles & Apparel"],
      ["Imitation Jewellery", "/products/Imitation Jewellery"],
      ["Cosmetic products", "/products/Beauty Products"],
    ],
  },
];
