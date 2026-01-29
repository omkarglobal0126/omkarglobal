import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";

const PRODUCTS = [
  {
    title: "Food & Agriculture",
    base: "/products",
    items: ["Grains & Cereals", "Fruits", "Vegetables", "Grocery Products"],
  },
  {
    title: "Handicrafts & Industrial",
    base: "/products",
    items: [
      "Handicrafts & Decorative",
      "Copper Products",
      "Kitchenware & Cutlery",
      "Furniture Products",
    ],
  },
  {
    title: "Lifestyle & Fashion",
    base: "/products",
    items: ["Textiles & Apparel", "Imitation Jewellery", "Beauty Products"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {/* BRAND */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-white text-2xl font-bold">
            Omkar <span className="text-orange-500">Global</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            We offer a diverse portfolio of high-quality products sourced with
            strict quality standards to meet domestic and international market
            demands.
          </p>

          <div className="flex gap-3 mt-6">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaXTwitter, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaInstagram, link: "#" },
            ].map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition"
              >
                <Icon className="text-white text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About Us", "Products", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-orange-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            {PRODUCTS.map((category) => (
              <div key={category.title}>
                <p className="text-white font-semibold mb-3">
                  {category.title}
                </p>

                <ul className="space-y-2 text-gray-400">
                  {category.items.map((item) => (
                    <li key={item}>
                      <Link
                        href={`${category.base}/${item}`}
                        className="hover:text-orange-400 transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* OFFICE INFO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Office Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-start items-center gap-1">
              <HiLocationMarker /> Bhanpuri, Raipur, Chhattisgarh
            </li>
            <li className="flex justify-start items-center gap-1">
              <IoCall /> +91 9109803735
            </li>
            <li className="flex justify-start items-center gap-1">
              <IoMdMail /> dewanganakashdeep97@gmail.com
            </li>
            <li className="flex justify-start items-center gap-1">
              <FaClock /> Mon – Sun: 24 Hours
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Transport Logistic. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-orange-400">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-orange-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
