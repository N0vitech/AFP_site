import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1634812932028-3baa37d90b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY4ODY3MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Video Production"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p 
            className="mb-4 text-sm tracking-[0.3em] text-white/80 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Ogni brand ha una storia. Noi la rendiamo cinema.
          </motion.p>
          
          <motion.h1 
            className="mb-6 text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Visionary
            <br />
            <span className="font-normal">Storytelling</span>
          </motion.h1>

          <motion.p 
            className="mb-12 max-w-2xl text-lg md:text-xl text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Produciamo spot e contenuti cinematografici di altissimo livello, trasformando i valori dei brand in immagini potenti e memorabili.
Dai grandi marchi all’istituzione, ogni progetto nasce con un’unica ambizione: lasciare il segno.
          </motion.p>

          <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-5 w-5" />
            <span>Guarda il Nostro Showreel</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="h-8 w-[1px] bg-white/30" />
            <span className="text-xs text-white/50 uppercase tracking-wider">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
