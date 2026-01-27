import Image from "next/image";
import about from "@/public/homepage/about.jpg";

export default function About() {
  return (
    <section className="py-20 flex justify-center items-center bg-white">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Left Images */}
        <div className="relative max-lg:mb-8">
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={about}
              alt="Logistics service"
              width={520}
              height={420}
              className="object-cover"
            />
          </div>

          {/* Experience Badge */}
          {/* <div className="absolute bottom-6 left-6 bg-[#0b0f17] text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-3xl font-bold text-orange-500">34+</p>
            <p className="text-sm">Years of Experience</p>
          </div> */}
        </div>

        {/* Right Content */}
        <div>
          {/* <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            About Company
          </span> */}

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Delivering Quality Products <br /> Across Industries
          </h2>

          <p className="mt-6 text-gray-600">
            We are a multi-product business committed to delivering quality,
            reliability, and value across a wide range of industries. Based in
            Bhanpuri, Raipur, Chhattisgarh, we specialize in sourcing and
            supplying premium products that meet the needs of domestic and
            commercial markets.
          </p>
          <p className="mt-2 text-gray-600">
            For inquiries, partnerships, or product details, feel free to
            contact us. Our team is available 24 hours a day, seven days a week,
            to assist you and ensure a smooth and reliable business experience.
          </p>

          {/* Points */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Worldwide Transport",
              "Safety & Reliability",
              "Real-time Tracking",
              "24/7 Customer Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">
                  ✓
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/about"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
