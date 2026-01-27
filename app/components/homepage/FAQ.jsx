"use client";

import { useState } from "react";
import Image from "next/image";
import faq from "@/public/homepage/faq.jpg"

const faqs = [
  {
    q: "What services are covered in logistics?",
    a: "Logistics services include transportation, warehousing, inventory management, packaging, and distribution of goods.",
  },
  {
    q: "How do you ensure safety during shipment?",
    a: "We follow strict safety protocols, real-time tracking, and professional handling to ensure secure delivery.",
  },
  {
    q: "Do you provide international shipping?",
    a: "Yes, we offer international shipping with customs clearance and global tracking support.",
  },
  {
    q: "Can I track my shipment in real-time?",
    a: "Absolutely. Our advanced tracking system allows you to monitor shipments anytime.",
  },
  {
    q: "What makes your company reliable?",
    a: "Our experience, trained staff, modern infrastructure, and customer-first approach make us reliable.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT FAQ */}
        <div>
          <span className="text-orange-500 font-semibold uppercase text-sm">
            General FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center p-4 text-left font-medium"
                >
                  <span>{item.q}</span>
                  <span className="text-orange-500 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 text-gray-600 text-sm transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 pb-4"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src={faq}
            alt="Logistics Truck"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
