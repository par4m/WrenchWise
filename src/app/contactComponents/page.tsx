import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center bg-fixed">
      <main className="flex flex-col justify-center text-center min-h-dvh p-4">
        <div className="relative flex flex-col gap-8 p-8 rounded-2xl mx-auto w-full max-w-md backdrop-blur-sm bg-black/70 text-white border border-white/10 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl" />
          <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl blur-md -z-10" />

          {/* Content */}
          <div className="relative space-y-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent sm:text-5xl">
              Param's
              <br />
              Repair Shop
            </h1>
            <p className="text-lg text-white/80 font-medium">M2M Repairs</p>
          </div>

          <div className="relative space-y-6 text-base sm:text-lg">
            <div className="flex items-center justify-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <address className="not-italic">
                Eshwar Nagar, Manipal 576104
              </address>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/90">
              <Clock className="w-4 h-4" />
              <p>Open Daily: 9am to 5pm</p>
            </div>

            <Link
              href="tel:7976749679"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>91-7976749679</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
