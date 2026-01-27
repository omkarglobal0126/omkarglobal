"use client";

import Image from "next/image";
import contactUs from "@/public/homepage/contactUs.jpg";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

import { IoCall } from "react-icons/io5";

export default function RequestQuote() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={contactUs}
          alt="Logistics background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center"></div>

        {/* RIGHT FORM */}
        <div className="bg-white/95 rounded-xl p-8 shadow-xl">
          <span className="text-orange-500 font-semibold uppercase text-sm">
            Request Quote
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Request Quote Form</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />
            <input
              type="text"
              placeholder="City / Location"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />

            <select className="bg-gray-200 p-3 rounded-md focus:outline-orange-500">
              <option>Freight Type</option>
              <option>Road Freight</option>
              <option>Sea Freight</option>
              <option>Air Freight</option>
              <option>Rail Transport</option>
            </select>

            <input
              type="number"
              placeholder="Weight (kg)"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500"
            />

            <textarea
              placeholder="Message"
              rows="3"
              className="bg-gray-200 p-3 rounded-md focus:outline-orange-500 md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-md font-semibold"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>

    
    </section>
  );
}
