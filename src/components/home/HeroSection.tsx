import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero Background Image */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/images/hero3.png" // replace with your image path
          alt="Precision Sheet Metal Fabrication"
          fill
          className="object-cover"
          priority
        />

        {/* Certification Boxes */}
        {/* Certification Boxes */}
        <div className="absolute top-6 right-6 z-20 space-y-4">
          {[
            {
              text: "ISO Certified 9001:2015",
              link: null,
            },
            {
              text: "Electrical Safety Authorized Certified",
              link: "https://findacontractor.esasafe.com/Home/ContractorSearch?Name=&LicenceNumber=7018183&City=&TelephoneNumber=&MaxResults=20",
              pulse: true,
            },
          ].map((item, index) => {
            const content = (
              <div
                className={`w-64 rounded-md cursor-pointer transition-all duration-300 bg-gradient-to-r from-[#d82222] to-[#ff4b4b] hover:from-[#103f91] hover:to-white px-4 py-3 shadow-md`}
              >
                <p
                  className={`text-white font-semibold text-center ${
                    item.pulse ? "animate-pulse-custom" : ""
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center container-custom">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">PRECISION</span>{" "}
              <span className="text-white">SHEET METAL</span>{" "}
              <span className="text-white">FABRICATION</span>{" "}
              <span className="text-white">&</span>{" "}
              <span className="text-white">MANUFA</span>
              <span className="text-white">CTURING</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Gold banner */}
      <div className="bg-secondary text-white py-4">
        <div className="container-custom">
          <h2 className="text-lg md:text-xl font-medium text-center">
            ON-SITE MANUFACTURING SOLUTIONS FROM START TO FINISH
          </h2>
        </div>
      </div>

      {/* Quick service links */}
      <div className="container-custom py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center">
        {[
          {
            src: "/images/laser-cutting-closeup.jpg",
            label: "Sheet Laser Cutting",
          },
          {
            src: "/images/laser-cutting-hero.jpg",
            label: "Tube Laser Cutting",
          },
          {
            src: "/images/cnc-machine.jpg",
            label: "CNC Machining",
          },
          {
            src: "/images/cnc-machine.jpg",
            label: "CNC Turning",
          },
          {
            src: "/images/cnc-punching.jpg",
            label: "Punching",
          },
          {
            src: "/images/sheet-metal-bending.jpg",
            label: "Forming (Press Brake)",
          },
          {
            src: "/images/laser-cutting-closeup.jpg",
            label: "Finishing",
          },
        ].map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="h-24 w-full relative mb-3 overflow-hidden">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm font-medium text-primary">{item.label}</h3>
          </div>
        ))}
      </div>

      {/* Intro section with 20+ years */}
      <div className="bg-primary text-white py-12">
        <div className="container-custom grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              20+ Years Of <br />
              Engineering Excellence
            </h2>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "S",
                text: "Specialists in metal fabrication",
              },
              {
                icon: "Q",
                text: "Overall component quality",
              },
              {
                icon: "D",
                text: "On-time delivery is assured every time",
              },
            ].map((item, index) => (
              <div className="flex items-start space-x-4" key={index}>
                <div className="w-12 h-12 flex-shrink-0 bg-secondary flex items-center justify-center rounded-full">
                  <span className="text-white font-bold">{item.icon}</span>
                </div>
                <div>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
