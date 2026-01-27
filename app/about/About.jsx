import Image from "next/image";
import hero from "@/public/about/hero.jpg";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={hero}
                alt="Factory Interior"
                width={700}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* <span className="text-sm font-semibold text-orange-500 flex items-center gap-2 mb-4">
              ✦ ABOUT US
            </span> */}

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Best Solution For <br />
              All Industrial & Factory <br />
              Businesses
            </h2>

            <p className="text-gray-600 leading-relaxed mb-2 max-w-xl">
              We are a multi-product business committed to delivering quality,
              reliability, and value across a wide range of industries. Based in
              Bhanpuri, Raipur, Chhattisgarh, we specialize in sourcing and
              supplying premium products that meet the needs of domestic and
              commercial markets.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
              Our product portfolio includes food and agricultural products such
              as grains, cereals, fruits, vegetables, and grocery essentials,
              carefully selected to ensure freshness, purity, and consistent
              quality. Alongside food products, we offer a diverse range of
              handicrafts and decorative items, copper products, textiles and
              apparel, imitation jewellery and precious stones, kitchenware and
              cutlery, furniture products, and beauty products.
            </p>
        

            {/* FEATURES LIST */}
            <ul className="space-y-4 mb-10">
              {[
                "3 Factories, 36400m² Covering, 150+ Workers",
                "Professional Quality Inspection Teams",
                "Focus On Sustainability",
                "Product Design & Development",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* BUTTON + SMALL IMAGE */}
            <div className="flex items-center gap-6">
              <button className="bg-orange-500 text-white px-7 py-3 rounded-lg font-semibold hover:scale-105 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
