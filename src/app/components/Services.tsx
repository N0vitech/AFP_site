import { motion } from 'motion/react';
import { Film, Tv, Camera, Edit3, Lightbulb, Users, FileText, Share2, Calendar, TrendingUp } from 'lucide-react';

const productionServices = [
  {
    icon: Film,
    title: 'Spot Pubblicitari',
    description: 'Produzioni commerciali di alto livello per brand nazionali e internazionali',
  },
  {
    icon: Camera,
    title: 'Brand Film',
    description: 'Contenuti cinematografici che raccontano la storia del tuo brand',
  },
  {
    icon: Tv,
    title: 'Corporate Video',
    description: 'Video istituzionali e comunicazione aziendale di impatto',
  },
  {
    icon: FileText,
    title: 'Documentari',
    description: 'Produzioni documentaristiche con approccio cinematografico e narrativo',
  },
  {
    icon: Edit3,
    title: 'Post-Produzione',
    description: 'Color grading, VFX e finalizzazione con standard internazionali',
  },
  {
    icon: Lightbulb,
    title: 'Creative Direction',
    description: 'Sviluppo creativo e concept dal brief alla realizzazione',
  },
  {
    icon: Users,
    title: 'Full Production',
    description: 'Gestione completa della produzione con crew specializzato',
  },
];

const marketingServices = [
  {
    icon: Share2,
    title: 'Gestione Social Media',
    description: 'Creazione e gestione professionale dei profili social aziendali',
  },
  {
    icon: Calendar,
    title: 'Calendari Editoriali',
    description: 'Pianificazione strategica dei contenuti per massimizzare l\'engagement',
  },
  {
    icon: TrendingUp,
    title: 'Sponsorizzazioni',
    description: 'Strategie e gestione di campagne di advertising e sponsorizzazioni',
  },
];

export function Services() {
  return (
    <section className="bg-gray-50 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-black">
            I Nostri Servizi
          </h2>
        </motion.div>

        {/* Production Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-light text-black mb-8"
          >
            Produzione Video
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 hover:shadow-lg transition-shadow group"
                >
                  <div className="mb-6">
                    <Icon 
                      className="h-10 w-10 text-black group-hover:scale-110 transition-transform" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium text-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Marketing Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-light text-black mb-8"
          >
            Marketing & Social Media
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 hover:shadow-lg transition-shadow group"
                >
                  <div className="mb-6">
                    <Icon 
                      className="h-10 w-10 text-black group-hover:scale-110 transition-transform" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-medium text-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}