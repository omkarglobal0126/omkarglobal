import Image from "next/image";

const certifications = [
  { name: "DGFT", img: "/certifications/dgft.png" },
  { name: "APEDA", img: "/certifications/apeda.png" },
  { name: "MSME", img: "/certifications/msme.png" },
  { name: "FIEO", img: "/certifications/fieo.png" },
  { name: "FICCI", img: "/certifications/ficci.png" },
  { name: "GCCI", img: "/certifications/gcci.png" },
  { name: "UDYOG AADHAR", img: "/certifications/udyog-aadhar.png" },
  { name: "GST", img: "/certifications/gst.png" },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
            Our Certifications & Memberships
          </h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto leading-relaxed">
            OES Export Import Pvt Ltd is recognized by the Government of India and 
            adheres to international trade standards.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {certifications.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative shadow w-full h-90 md:w-70 md:h-80 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}