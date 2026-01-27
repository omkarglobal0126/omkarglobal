import { Factory, Globe, TrendingUp, Handshake } from "lucide-react";

export default function WorkingProcess() {
  const steps = [
    {
      id: "01",
      title: "Production Of Fabric",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: Factory,
    },
    {
      id: "02",
      title: "Exportation Globally",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: Globe,
    },
    {
      id: "03",
      title: "Improve And Evolve",
      desc: "We do execute stabilization including reweaving & stitch repair details.",
      icon: TrendingUp,
    },
    {
      id: "04",
      title: "Lasting Partnership",
      desc: "We build strong client relationships through regular contact and feedback.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <span className="text-sm font-semibold text-orange-500 flex items-center justify-center gap-2 mb-4">
            ✦ 02. OUR WORKING PROCESS
          </span> */}

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Description Textiles Process <br />
            For Exceptional Results
          </h2>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="text-center relative">
                
                {/* ICON */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-orange-400 flex items-center justify-center">
                  <Icon className="w-9 h-9 text-black" />
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gray-200 mb-6" />

                {/* CONTENT */}
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {step.id}. {step.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
