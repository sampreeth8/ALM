import ContactSection from "@/components/home/ContactSection";
import Image from "next/image";
import Link from "next/link";

export default function CapabilitiesPage() {
  return (
    <div className="bg-white text-gray-800 text-[1.1rem] leading-relaxed">
      {/* Header */}
      <section className="bg-[#c38f4a] py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Capabilities And Equipment</h1>
      </section>

      {/* Capabilities and CNC Flow */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
          <ul className="space-y-3">
            <li>
              <strong>CNC Milling</strong>
              <br />
              Up to 62” X 30”
            </li>
            <li>
              <strong>Conventional Milling</strong>
              <br />
              32” x 12”
            </li>
            <li>
              <strong>CNC Turning</strong>
              <br />
              Up to 20” diameter and 82” length
            </li>
            <li>
              <strong>Conventional Lathe</strong>
              <br />
              Up to 20” diameter and up to 130” length
            </li>
            <li>
              <strong>Band Saw</strong>
              <br />
              Up to 14” wide and cut to any length
            </li>
            <li>
              <strong>Welding</strong>
              <br />
              MIG, TIG, Stick, Aluminum, Spot etc.
            </li>
            <li>
              <strong>Sheet Laser</strong>
              <br />5 ft Wide – 10 ft length, Thickness inch and Half
            </li>
            <li>
              <strong>Tube Laser</strong>
              <br />9 inch Diameter (Round, Square, Triangle, C-channel, I
              Beams), Length up to 24 ft
            </li>
            <li>
              <strong>Brake Press</strong>
              <br />1 mm to 3/8 mm x 8 feet long. 12 Ft coming soon
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            ALM 10 Points CNC Flow
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>Processing methods customized to order</li>
            <li>Programming</li>
            <li>Testing raw materials</li>
            <li>Testing of machining cutters</li>
            <li>Checking by a CNC operator</li>
            <li>QC Inspection</li>
            <li>Flash, Polish, and Burr</li>
            <li>Dimensional awareness</li>
            <li>Personalized surface treatment</li>
            <li>Final inspection process for delivery</li>
          </ul>
        </div>

        <div className="flex">
          <div className="relative w-[300px] h-[600px]">
            <Image
              src="https://absolutelaser.ca/wp-content/uploads/2023/09/cnc-1187x1536.jpg" // Use your actual path
              alt="All Machines"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Industry Patrons And Market Expertise
            </h2>
            <p className="text-gray-700 mb-6">
              Absolute Laser & MFG portfolio includes industrial sectors where
              Laser, Tube laser, CNC machining and complete fabrication applies
              to various forms of manufacturing.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-6">
              {/* Left Column */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Our industry specialties are:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Automation</li>
                  <li>Construction</li>
                  <li>Packaging</li>
                  <li>Paper</li>
                  <li>Plastic</li>
                  <li>Rubber</li>
                  <li>Wood</li>
                  <li>Textiles</li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Materials</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Metal</li>
                  <li>Steel: Stainless & Tool</li>
                  <li>Aluminum</li>
                  <li>Copper</li>
                  <li>Brass</li>
                  <li>Bronze</li>
                </ul>
              </div>
            </div>

            <a
              href="/contact-us"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-6 py-3 rounded transition"
            >
              CONTACT US
            </a>
          </div>

          {/* Image Content (Free Positioned) */}
          <div className="flex justify-center">
            <div className="relative w-[450px] h-[500px]">
              <Image
                src="https://absolutelaser.ca/wp-content/uploads/2023/09/baner5.jpg" // replace with your image path
                alt="Industry Materials"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
