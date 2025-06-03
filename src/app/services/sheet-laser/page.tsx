import Image from "next/image";
import ContactSection from "@/components/home/ContactSection";

export default function SheetLaserPage() {
  return (
    <div className="bg-white text-gray-800 text-[1.15rem] leading-relaxed">
      {/* Section 1 – Header + Callout */}
      <section className="bg-[#c38f4a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">
              Absolute Laser & Manufacturing
            </h2>
            <p className="mb-4">
              Absolute Laser & Manufacturing offers on-site, high-quality CNC
              laser cutting services around Coventry and the Midlands area. The
              service which we offer to our new and existing clients are:
            </p>
            <p>
              From low-volume prototypes to high-volume production, our skilled,
              professional laser cutting team will produce your product from
              start to end in an efficient and timely manner.
            </p>
            <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded shadow-md transition">
              Call us on (416) 749 5050
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/slcover.png"
              alt="Sheet Laser Cover"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 2 – Project Gallery */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-primary">
          Our Sheet Laser Cutting Projects
        </h2>
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1400px] h-auto overflow-x-auto">
            <Image
              src="https://absolutelaser.ca/wp-content/uploads/2024/04/Sheet-Laser-Products-01-scaled.jpg" // Place this final full image in public/images folder
              alt="Sheet Laser Projects Full"
              width={1500}
              height={400}
              className="rounded-lg shadow-md object-contain w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 3 – Services Overview */}
      <section className="py-10 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            ABSOLUTE LASER & MANUFACTURING
          </h2>
          <p className="mb-4">
            ABSOLUTE LASER & MANUFACTURING provides high-quality CNC laser
            cutting services in Canada and the US. We offer the following
            services to our new and current clients:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>✔ Laser Cutting (Sheet & Tube)</li>
            <li>✔ CNC Machining & Milling</li>
            <li>✔ Press Brake Folding</li>
            <li>✔ Punching & Fastener Installation</li>
            <li>✔ Fabrication</li>
            <li>✔ Welding</li>
            <li>✔ Power Coating</li>
          </ul>
          <p className="mt-4">
            Our laser cutting services include the following materials:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-2">
            <li>✔ Mild Steel</li>
            <li>✔ Stainless Steel</li>
            <li>✔ Aluminium</li>
            <li>✔ Brass</li>
            <li>✔ Tread Plate</li>
            <li>✔ Zintec</li>
            <li>✔ Copper</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://absolutelaser.ca/wp-content/uploads/2024/04/harry-burrows-laser-cutting-01.jpg.webp"
            alt="Laser Sheet Cutting"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        
      </section>

      {/* Section 4 – Technical Specs */}
      <section className="px-6 py-0 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6 text-primary">
          Specification and Technical Criteria
        </h3>
        <p className="mb-4">
          Bodor is the market leader in laser cutting equipment. We only use the
          highest quality equipment at
          <strong> ABSOLUTE LASER & MANUFACTURING</strong>; this ensures your
          requirements are met to the best specifications:
        </p>

        <p className="mb-6">Our laser cutter has the following features:</p>

        <ul className="space-y-3 text-center text-[1.1rem]">
          <li>✔ Mild steel – up to 50mm thick</li>
          <li>✔ Stainless steel – up to 25mm thick</li>
          <li>✔ Aluminium – up to 25mm thick</li>
        </ul>
      </section>

      <ContactSection />
    </div>
  );
}
