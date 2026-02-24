import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-light text-black mb-8">
              Parliamo del<br />Tuo Progetto
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Siamo pronti a trasformare la tua visione in realtà. Contattaci per discutere il tuo prossimo progetto video.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-black mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:info@automotivefilmproduction.com" className="text-lg text-black hover:underline">
                    info@automotivefilmproduction.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-black mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1">Telefono</div>
                  <a href="tel:+390123456789" className="text-lg text-black hover:underline">
                    +39 012 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-black mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-sm text-gray-500 mb-1">Studio</div>
                  <div className="text-lg text-black">
                    Via Papiria 50<br />
                    00179, Roma, Italia
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  Azienda
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-white py-4 px-8 font-medium hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Invia Richiesta
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}