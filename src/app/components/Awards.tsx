import { motion } from 'motion/react';
import { Award, Trophy, Star } from 'lucide-react';

const awards = [
  {
    title: 'College Emmy',
    year: '2024',
    category: 'Non-Fiction',
    icon: Trophy,
  },
  {
    title: 'Oscar Student Academy Awards',
    year: '2023',
    category: 'Best Short Film',
    icon: Award,
  },
  {
    title: 'European Film Awards',
    year: '2023',
    category: 'Nominee',
    icon: Star,
  },
];

export function Awards() {
  return (
    <section className="relative bg-white py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
            Recognition
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">
            Premi e Riconoscimenti
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Il nostro lavoro è stato riconosciuto dalle più prestigiose istituzioni internazionali del cinema e della pubblicità
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative group"
              >
                <div className="border border-gray-200 p-10 h-full hover:border-black transition-colors">
                  <div className="mb-6">
                    <Icon className="h-12 w-12 text-black" strokeWidth={1} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{award.year}</span>
                      <div className="h-[1px] flex-1 bg-gray-200" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-black">
                      {award.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600">
                      {award.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Award Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 relative overflow-hidden"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1754951356539-4bf2f1e7c604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2NhciUyMHN0YXR1ZSUyMGdvbGRlbiUyMHRyb3BoeXxlbnwxfHx8fDE3Njk2ODM0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
              filter: 'blur(8px) brightness(0.3)',
              transform: 'scale(1.1)'
            }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Content */}
          <div className="relative p-12 md:p-16 text-center text-white">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-white" strokeWidth={1} />
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Oscar Student Academy Awards Winner
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Un riconoscimento internazionale che celebra l'eccellenza nella cinematografia e nella narrazione visiva
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}