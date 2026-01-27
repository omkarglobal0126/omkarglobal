import Image from "next/image";
import whyChooseUs from "@/public/homepage/whyChooseUs.jpg"

export default function WhyChoose() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Why Choose <br />
            TransLogistics <span className="text-orange-500">PRO</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            Discover the unique benefits of partnering with TransLogistics PRO.
            Our value proposition revolves around elevating your logistics
            experience, ensuring professionalism, precision, and perfection in
            every operation.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4">
            {[
              "Elevate your logistics experience with us.",
              "Professionalism and precision in every operation.",
              "A partnership built on trust and reliability.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">➤</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-4xl font-bold text-black">300+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Warehouses <br /> Managed
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-black">250+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Supply <br /> Engineers
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-black">25+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Countries <br /> Covered
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={whyChooseUs}
              alt="Warehouse management"
              width={600}
              height={700}
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-10 -left-20 bg-white shadow-xl rounded-xl p-6 w-72 hidden md:block">
            <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full mb-4">
              👍
            </div>
            <h4 className="font-semibold text-lg">
              Quality Management <br /> System
            </h4>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Top Button (optional like image) */}
      <div className="fixed bottom-6 right-6 bg-orange-500 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
        ↑
      </div>
    </section>
  );
}
