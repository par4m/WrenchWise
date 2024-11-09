"use client";

import Link from "next/link";
import { Clock, MapPin, Phone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-home-img bg-cover bg-center min-h-dvh flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/30 to-red-800/30 rounded-2xl blur-xl" />
        <div className="relative bg-stone-900/90 rounded-2xl p-8 shadow-2xl overflow-hidden border border-amber-700/20">
          <div className="absolute inset-0 )] opacity-5" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            <div className="text-center space-y-2">
              <Wrench className="w-12 h-12 mx-auto text-amber-500" />
              <h1 className="text-4xl font-bold tracking-tight text-amber-100 sm:text-5xl">
                Param's
                <br />
                Repair Shop
              </h1>
              <p className="text-lg text-amber-200/80 font-medium">
                M2M Repairs
              </p>
            </div>

            <div className="space-y-6 text-amber-100/90">
              <InfoItem icon={MapPin}>Eshwar Nagar, Manipal 576104</InfoItem>
              <InfoItem icon={Clock}>Open Daily: 9am to 5pm</InfoItem>
              <Link
                href="tel:7976749679"
                className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-lg bg-amber-700/30 text-amber-100 font-medium transition-all duration-300 hover:bg-amber-600/40 hover:shadow-lg hover:shadow-amber-700/25 border border-amber-600/30"
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
      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-stone-800/50 backdrop-blur-sm border border-amber-700/20"
    >
      <Icon className="w-5 h-5 text-amber-500" />
      <span>{children}</span>
    </motion.div>
  );
}
