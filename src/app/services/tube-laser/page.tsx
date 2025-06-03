import ContactSection from "@/components/home/ContactSection";
import Image from "next/image";

export default function TubeLaserPage() {
  return (
    <div className="bg-white text-gray-800 text-[1.15rem] leading-relaxed">

      {/* Section 1 – Capabilities Overview */}
      <section className="bg-[#c38f4a] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Absolute Laser & Manufacturing</h2>
            <p className="mb-6 text-lg">ABSOLUTE offers the following tube laser services for steel:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>✔ Thickness from 18 gauge (.047”) to 1/2”</li>
              <li>✔ 24 feet max length</li>
              <li>✔ 440 lbs max weight</li>
              <li>✔ Round tube 3/8” up to 9" diameter</li>
              <li>✔ Square tubing 3/8” up to 6"</li>
              <li>✔ Rectangular tube that fits inside a 9" diameter circle</li>
              <li>✔ Channel that fits inside a 9" diameter circle</li>
              <li>✔ Angle that fits inside a 9" diameter circle</li>
            </ul>
            <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded shadow-md transition">
              Call us on (416) 749 5050
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/laser-cutting-closeup.jpg"
              alt="Tube Laser"
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
              src="https://absolutelaser.ca/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-04-at-02.57.30.jpeg" // Place this final full image in public/images folder
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
          <h2 className="text-3xl font-bold mb-6 text-primary">ABSOLUTE LASER & MANUFACTURING</h2>
          <p className="mb-3">
            We provide high-quality CNC laser cutting services in Canada and the US. Our services include:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>✔ Laser Cutting (Sheet & Tube)</li>
            <li>✔ CNC Machining & Milling</li>
            <li>✔ Press Brake Folding</li>
            <li>✔ Punching & Fastener Installation</li>
            <li>✔ Fabrication</li>
            <li>✔ Welding</li>
            <li>✔ Powder Coating</li>
          </ul>
          <p className="mt-3">From low-volume prototypes to high-volume production, our skilled, professional laser cutting team will produce your product from start to end in an efficient and timely manner.</p>
          <p className="mt-3">Our laser cutting services include materials like:</p>
          <ul className="list-disc list-inside space-y-3 mt-2">
            <li>✔ Mild Steel</li>
            <li>✔ Stainless Steel</li>
            <li>✔ Aluminum</li>
            <li>✔ Brass</li>
            <li>✔ Tread Plate</li>
            <li>✔ Zinc</li>
            <li>✔ Copper</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="https://absolutelaser.ca/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-04-at-02.58.58-1024x576.jpeg" alt="Laser Cutting Machine" width={500} height={400} className="rounded-lg shadow-lg" />
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded shadow-md transition">
            Call us on (416) 749 5050
          </button>
        </div>
      </section>

      {/* Section 4 – Technical Criteria */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6 text-primary">Specification and Technical Criteria</h3>
        <p>
          Bodor is the market leader in laser cutting equipment. We only use the highest quality equipment at
          ABSOLUTE LASER & MANUFACTURING to ensure your requirements are met to the best specifications.
        </p>
      </section>
      <ContactSection />
    </div>
  );
}
