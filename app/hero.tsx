"use client";

import { MapPin, Users, Code, Globe, Mic } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      style={{
        background: "url('/phippy-family-2.png')",
        backgroundPositionY: "180%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          {/* Location Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Kampala, Uganda
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join the <span className="text-blue-600">Cloud Native Kampala</span>{" "}
            Community
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with fellow cloud native enthusiasts, developers, and DevOps
            professionals in Kampala. Learn, share, and grow together in the
            rapidly evolving cloud native ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://community.cncf.io/cloud-native-kampala/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              Join the Community
            </a>

            <Link
              href="/become-a-speaker"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
            >
              <Mic className="w-5 h-5 mr-2" />
              Become a Speaker
            </Link>
            <a
              href="https://chat.whatsapp.com/HpdvrnWyFaYCQ3xV1pRIEe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors shadow-sm"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Stay Updated via WhatsApp Group
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Networking
            </h3>
            <p className="text-gray-600">
              Connect with like-minded professionals and expand your network in
              the cloud native community.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Learning
            </h3>
            <p className="text-gray-600">
              Access workshops, talks, and hands-on sessions covering
              Kubernetes, Docker, and more.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Global Community
            </h3>
            <p className="text-gray-600">
              Be part of the worldwide CNCF community while contributing to the
              local tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
