"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, Home } from "lucide-react";

// app/not-found.tsx
// export const metadata = {
//   title: "Page Not Found",
//   description: "The page you are looking for could not be found.",
// };

export default function NotFound() {
  return (
    <div className="bg-home-img bg-cover bg-center min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/30 to-red-800/30 rounded-2xl blur-xl" />
        <div className="relative bg-stone-900/90 rounded-2xl p-8 shadow-2xl overflow-hidden border border-amber-700/20">
          <div className="absolute inset-0 ')] opacity-5" />
          <title>404 - Not Found</title>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 space-y-8"
          >
            <div className="text-center space-y-2">
              <Wrench className="w-12 h-12 mx-auto text-[#ba906e]" />
              <h1 className="text-4xl font-bold tracking-tight text-amber-100 sm:text-5xl">
                Page Not Found
              </h1>
              <p className="text-lg text-amber-200/80 font-medium">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </div>

            <Link
              href="/"
              className="group flex items-center justify-center gap-2 px-6 py-3 w-full rounded-lg bg-amber-700/30 text-amber-100 font-medium transition-all duration-300 hover:bg-amber-600/40 hover:shadow-lg hover:shadow-amber-700/25 border border-amber-600/30"
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              <span>Return Home</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
