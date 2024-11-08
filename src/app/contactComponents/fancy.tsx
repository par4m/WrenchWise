"use client";

import Link from "next/link";
import { Clock, MapPin, Phone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-dvh flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50" />
        <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            <div className="text-center space-y-2">
              <Wrench className="w-12 h-12 mx-auto text-purple-400" />
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-5xl">
                Param's
                <br />
                Repair Shop
              </h1>
              <p className="text-lg text-gray-300 font-medium">M2M Repairs</p>
            </div>

            <div className="space-y-6 text-gray-300">
              <InfoItem icon={MapPin}>Eshwar Nagar, Manipal 576104</InfoItem>
              <InfoItem icon={Clock}>Open Daily: 9am to 5pm</InfoItem>
              <Link
                href="tel:7976749679"
                className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Phone className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                <span>91-7976749679</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function InfoItem({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm"
    >
      <Icon className="w-5 h-5 text-purple-400" />
      <span>{children}</span>
    </motion.div>
  );
}
