import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import daciaLogo from '@/asset/c839c2a2b17fb010dd501e8d4413d9cafebf9840.webp';
import marinaMilitareLogo from '@/asset/d8db2c7ea9d44c8c2a9358ae03a86e83f5860cb4.webp';
import renaultLogo from '@/asset/9f505de3d7975a2217b057658e5110a9c18c5db9.webp';
import ospreyLogo from '@/asset/d15920d0ca6b83568b4997348a852d526be4d134.webp';
import unitedNationsLogo from '@/asset/973729c1e176f100fcc45042b2a1d5ed706bcd5f.webp';
import alpineLogo from '@/asset/948467faaa9cff14482b1b3abd1cc7e8286dfdf1.webp';
import mercedesLogo from '@/asset/db6c70f7fa39e1eaf8d895c907f8182286721fa7.webp';
import goretexLogo from '@/asset/b3a365e181a9cd3e43ac0d3fd7a3cb28b014a02b.webp';

const clients = [
  {
    name: 'Alpine',
    logo: alpineLogo,
    isImage: true
  },
  {
    name: 'Mercedes-Benz',
    logo: mercedesLogo,
    isImage: true
  },
  {
    name: 'Dacia',
    logo: daciaLogo,
    isImage: true
  },
  {
    name: 'Renault',
    logo: renaultLogo,
    isImage: true
  },
  {
    name: 'Udinese Calcio',
    logo: 'UDINESE CALCIO',
    isImage: false
  },
  {
    name: 'Marina Militare',
    logo: marinaMilitareLogo,
    isImage: true
  },
  {
    name: 'Gore-Tex',
    logo: goretexLogo,
    isImage: true
  },
  {
    name: 'United Nations',
    logo: unitedNationsLogo,
    isImage: true
  },
  {
    name: 'Osprey',
    logo: ospreyLogo,
    isImage: true
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleClients = clients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
            Trusted by
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-black">
            Brand Internazionali
          </h2>
        </motion.div>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white border-2 border-gray-200 hover:border-black transition-all shadow-lg hover:scale-110"
            aria-label="Previous brands"
          >
            <ChevronLeft className="h-6 w-6 text-black" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white border-2 border-gray-200 hover:border-black transition-all shadow-lg hover:scale-110"
            aria-label="Next brands"
          >
            <ChevronRight className="h-6 w-6 text-black" />
          </button>

          {/* Brands Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              >
                {visibleClients.map((client) => (
                  <div
                    key={client.name}
                    className="flex items-center justify-center p-8 border border-gray-200 hover:border-black transition-all group h-[120px] hover:shadow-lg"
                  >
                    {client.isImage ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-16 w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-black transition-colors tracking-tight text-center">
                        {client.logo}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-black'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}