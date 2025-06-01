import PageHeader from "@/components/layout/PageHeader";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products | Absolute Laser & Manufacturing",
  description:
    "Explore our premium stainless steel kitchen units and other precision-fabricated products.",
};

const productImages = [
  "https://absolutelaser.ca/wp-content/uploads/2023/09/product11-1024x767.jpg",
  "https://absolutelaser.ca/wp-content/uploads/2023/09/product12.jpg",
  "https://absolutelaser.ca/wp-content/uploads/2023/09/product14.jpg",
  "https://absolutelaser.ca/wp-content/uploads/2023/09/product15.jpg",
  "https://absolutelaser.ca/wp-content/uploads/2023/09/product16.jpg",
];

export default function ProductsPage() {
  return (
    <div>
      <PageHeader title="Products" />

      {/* Products Grid - 3 in first row, 2 in second */}
      <section className="container-custom py-16 space-y-12">
        {/* First Row - 3 images */}
        <div className="flex flex-wrap justify-center gap-8">
          {productImages.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow max-w-xs w-full flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-center">
                <a
                  href="#"
                  className="bg-primary text-white py-2 px-6 rounded hover:bg-opacity-90 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 images */}
        <div className="flex flex-wrap justify-center gap-8">
          {productImages.slice(3).map((src, i) => (
            <div
              key={i + 3}
              className="bg-white rounded-lg shadow max-w-xs w-full flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Product ${i + 4}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex justify-center">
                <a
                  href="#"
                  className="bg-primary text-white py-2 px-6 rounded hover:bg-opacity-90 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Details Section with 2 stacked images on right */}
      <section className="container-custom py-16 bg-white flex flex-col lg:flex-row gap-10">
        {/* Text content left */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4">
            Heavy Duty Stainless Steel Kitchen Units
          </h2>
          <p className="mb-4">
            Stainless Steel Cupboards And Wall Unit Cabinets Manufactured purely
            Canadian.
          </p>
          <p className="mb-4">
            Our premium range of commercial stainless steel base units and wall
            units are manufactured by our factory. All our wall cupboards and
            base units are fully welded and supplied to the highest standards
            and quality and are manufactured to suit all brands of commercial
            pass through dishwashers. Suitable for both domestic and commercial
            environments.
          </p>
          <p className="mb-4">
            Available in standard sizes & bespoke solutions with various options
            available. These can be made to measure or modular.
          </p>
          <p className="mb-4">
            All our stainless steel commercial catering kitchens are
            manufactured by us in our Etobicoke based factory. Built to Canadian
            commercial kitchen standards. We can even provide a commercial
            solution to a domestic kitchen.
          </p>
          <p className="mb-4">
            We boast the highest quality product on the market and we also offer
            a delivery & installation service too!
          </p>
          <p className="mb-4">
            With all fabrication and customer requirements suitable in
            commercial kitchens or domestic properties we fabricate a range of
            high quality stainless steel kitchens.
          </p>
          <p className="mb-4">
            We fabricate stainless steel base units and wall units to various
            sizes for commercial kitchens.
          </p>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Modular Solutions with frame work</li>
            <li>Fully Welded</li>
            <li>Heavy Duty Stainless Steel</li>
            <li>Stainless Sinks Units</li>
            <li>Cupboard Units</li>
            <li>Corner Units</li>
            <li>Stainless Kitchens</li>
            <li>Made To Order</li>
            <li>Specialist Fabrication</li>
            <li>Various Heights</li>
            <li>Adjustable Shelves</li>
            <li>Shelf Units</li>
            <li>Cabinet Units</li>
            <li>Stainless Work Tops</li>
          </ul>
          <a
            href="#"
            className="inline-block bg-primary text-white py-3 px-6 rounded hover:bg-opacity-90 transition"
          >
            Get a Quote
          </a>
        </div>

        {/* Right side stacked images */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <img
            src="/images/laser-cutting-closeup.jpg"
            alt="Laser cutting"
            className="rounded-lg shadow w-full h-auto object-cover"
          />
          <img
            src="/images/sheet-metal-bending.jpg"
            alt="Sheet metal bending"
            className="rounded-lg shadow w-full h-auto object-cover"
          />
        </div>
      </section>

      <CTASection />
      <ContactSection />
    </div>
  );
}
