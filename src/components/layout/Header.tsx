"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Mail, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2 md:py-3">
        <div className="container-custom flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-6">
          <a
            href="mailto:info@absolutelaser.ca"
            className="flex items-center justify-center md:justify-start hover:text-secondary transition-colors duration-200"
          >
            <Mail className="w-4 h-4 mr-2" />
            info@absolutelaser.ca
          </a>
          <a
            href="tel:(416)7495050"
            className="flex items-center justify-center md:justify-start hover:text-secondary transition-colors duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            (416) 749 5050
          </a>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="bg-white border-b border-gray-200 shadow-md">
        <div className="container-custom flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 md:h-16 md:w-64">
              <Image
                src="/images/wlogo.jpeg"
                alt="Absolute Laser"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-primary hover:text-secondary"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-primary hover:text-secondary font-medium transition-colors duration-200 flex items-center">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-lg py-2">
                  {/* Laser Cutting */}
                  <div className="relative group/sub">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white justify-between items-center"
                    >
                      Laser Cutting <span>▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 bg-white shadow-lg py-2 invisible group-hover/sub:visible">
                      <Link
                        href="/services/tube-laser"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Tube Laser
                      </Link>
                      <Link
                        href="/services/sheet-laser"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Sheet Laser
                      </Link>
                    </div>
                  </div>

                  {/* CNC Machining */}
                  <div className="relative group/sub">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white justify-between items-center"
                    >
                      CNC Machining <span>▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 bg-white shadow-lg py-2 invisible group-hover/sub:visible">
                      <Link
                        href="/services/cnc-machine"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        CNC Machine
                      </Link>
                      <Link
                        href="/services/cnc-turning"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        CNC Turning
                      </Link>
                    </div>
                  </div>

                  {/* Assembly */}
                  <div className="relative group/sub">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white justify-between items-center"
                    >
                      Assembly <span>▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 bg-white shadow-lg py-2 invisible group-hover/sub:visible">
                      <Link
                        href="/services/welding"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Welding
                      </Link>
                    </div>
                  </div>

                  {/* Simple Links */}
                  <Link
                    href="/services/metal-punching"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Metal Punching
                  </Link>
                  <Link
                    href="/services/metal-formation"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Metal Formation
                  </Link>
                  <Link
                    href="/services/inspection"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Inspection
                  </Link>
                  <Link
                    href="/services/laser-printing"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Laser Printing
                  </Link>
                  <Link
                    href="/services/finishing"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Finishing
                  </Link>

                  {/* Fabrication */}
                  <div className="relative group/sub">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white justify-between items-center"
                    >
                      Fabrication <span>▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-56 bg-white shadow-lg py-2 invisible group-hover/sub:visible">
                      <Link
                        href="/services/fabrication/stainless-steel"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Stainless Steel
                      </Link>
                      <Link
                        href="/services/fabrication/mild-steel"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Mild Steel
                      </Link>
                      <Link
                        href="/services/fabrication/copper"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Copper
                      </Link>
                      <Link
                        href="/services/fabrication/brass"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Brass
                      </Link>
                      <Link
                        href="/services/fabrication/zinc"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Zinc
                      </Link>
                      <Link
                        href="/services/fabrication/aluminum"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Aluminum
                      </Link>
                      <Link
                        href="/services/fabrication/galvanized"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Galvanized
                      </Link>
                    </div>
                  </div>

                  {/* Solar Panel */}
                  <div className="relative group/sub">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white justify-between items-center"
                    >
                      Solar Panel <span>▶</span>
                    </Link>
                    <div className="absolute left-full top-0 w-[300px] bg-white shadow-lg py-2 invisible group-hover/sub:visible">
                      <Link
                        href="/services/solar/commercial"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Commercial, Residential, Industrial
                      </Link>
                      <Link
                        href="/services/solar/flat-roof"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Flat Roof Installation
                      </Link>
                      <Link
                        href="/services/solar/parking-lot"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Parking Lot Installation
                      </Link>
                      <Link
                        href="/services/solar/carport"
                        className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                      >
                        Carport Installation
                      </Link>
                    </div>
                  </div>

                  {/* Final links */}
                  <Link
                    href="/services/ev-charger"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    EV Charger
                  </Link>
                </div>
              </div>
            </div>

            {/* Capability Dropdown */}
            <div className="relative group">
              <button className="text-primary hover:text-secondary font-medium transition-colors duration-200 flex items-center">
                Capability
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-lg py-2">
                  <Link
                    href="/services/capability-and-Equipment"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Capabilities & Equipment
                  </Link>
                  <Link
                    href="/capability/accreditation"
                    className="block px-4 py-2 text-sm text-primary hover:bg-secondary hover:text-white"
                  >
                    Accreditations and Policy Documents
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/products"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/careers"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              Careers
            </Link>
            <Link
              href="/news"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              News
            </Link>
            <Link
              href="/electrical-work"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              Electrical Work
            </Link>
            <Link
              href="/contact-us"
              className="text-primary hover:text-secondary font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={toggleMenu}
          />

          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="p-2 text-primary hover:text-secondary"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-4 space-y-4">
                <Link
                  href="/"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div className="space-y-2">
                  <div className="font-medium text-primary py-2">Services</div>
                  <div className="pl-4 space-y-2">
                    {/* Laser Cutting */}
                    <div className="space-y-2">
                      <div className="font-medium text-primary">
                        Laser Cutting
                      </div>
                      <div className="pl-4">
                        <Link
                          href="/services/tube-laser"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Tube Laser
                        </Link>
                        <Link
                          href="/services/sheet-laser"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Sheet Laser
                        </Link>
                      </div>
                    </div>

                    {/* CNC Machining */}
                    <div className="space-y-2">
                      <div className="font-medium text-primary">
                        CNC Machining
                      </div>
                      <div className="pl-4">
                        <Link
                          href="/services/cnc-machine"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          CNC Machine
                        </Link>
                        <Link
                          href="/services/cnc-turning"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          CNC Turning
                        </Link>
                      </div>
                    </div>

                    {/* Assembly */}
                    <div className="space-y-2">
                      <div className="font-medium text-primary">Assembly</div>
                      <div className="pl-4">
                        <Link
                          href="/services/welding"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Welding
                        </Link>
                      </div>
                    </div>

                    {/* Simple Links */}
                    <Link
                      href="/services/metal-punching"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Metal Punching
                    </Link>
                    <Link
                      href="/services/metal-formation"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Metal Formation
                    </Link>
                    <Link
                      href="/services/inspection"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Inspection
                    </Link>
                    <Link
                      href="/services/laser-printing"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Laser Printing
                    </Link>
                    <Link
                      href="/services/finishing"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Finishing
                    </Link>

                    {/* Fabrication */}
                    <div className="space-y-2">
                      <div className="font-medium text-primary">
                        Fabrication
                      </div>
                      <div className="pl-4">
                        <Link
                          href="/services/fabrication/stainless-steel"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Stainless Steel
                        </Link>
                        <Link
                          href="/services/fabrication/mild-steel"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Mild Steel
                        </Link>
                        <Link
                          href="/services/fabrication/copper"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Copper
                        </Link>
                        <Link
                          href="/services/fabrication/brass"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Brass
                        </Link>
                        <Link
                          href="/services/fabrication/zinc"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Zinc
                        </Link>
                        <Link
                          href="/services/fabrication/aluminum"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Aluminum
                        </Link>
                        <Link
                          href="/services/fabrication/galvanized"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Galvanized
                        </Link>
                      </div>
                    </div>

                    {/* Solar Panel */}
                    <div className="space-y-2">
                      <div className="font-medium text-primary">
                        Solar Panel
                      </div>
                      <div className="pl-4">
                        <Link
                          href="/services/solar/commercial"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Commercial, Residential, Industrial
                        </Link>
                        <Link
                          href="/services/solar/flat-roof"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Flat Roof Installation
                        </Link>
                        <Link
                          href="/services/solar/parking-lot"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Parking Lot Installation
                        </Link>
                        <Link
                          href="/services/solar/carport"
                          className="block text-primary hover:text-secondary py-1"
                          onClick={toggleMenu}
                        >
                          Carport Installation
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="/services/ev-charger"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      EV Charger
                    </Link>
                  </div>
                </div>

                {/* Mobile Capability */}
                <div className="space-y-2">
                  <div className="font-medium text-primary py-2">
                    Capability
                  </div>
                  <div className="pl-4 space-y-2">
                    <Link
                      href="/services/capability-and-Equipment"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Capabilities & Equipment
                    </Link>
                    <Link
                      href="/capability/accreditation"
                      className="block text-primary hover:text-secondary py-1"
                      onClick={toggleMenu}
                    >
                      Accreditations and Policy Documents
                    </Link>
                  </div>
                </div>

                <Link
                  href="/products"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
                <Link
                  href="/careers"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Careers
                </Link>
                <Link
                  href="/news"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  News
                </Link>
                <Link
                  href="/electrical-work"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Electrical Work
                </Link>
                <Link
                  href="/contact-us"
                  className="block text-primary hover:text-secondary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
