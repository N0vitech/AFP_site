import { motion } from 'motion/react';
import { useState } from 'react';
import alessioImage from '@/asset/494b513e91c123f9bf82cacfc66f6f9cb8762dfe.webp';
import giorgioImage from '@/asset/c0bbd4532b0b31845b372ecd687d7c39be1cd07c.webp';
import andreaImage from '@/asset/538df775ac4ea69d09c121b5c2b9125652b49d31.webp';
import francescoImage from '@/asset/33e46923df21744505e175c17f77cba266e8c7b5.webp';

const teamMembers = [
  {
    name: 'Giorgio Ghiotto',
    role: 'Director & Cinematographer',
    description: 'Oscar Student Academy Awards Winner',
    image: giorgioImage,
    bio: 'Visionario del cinema contemporaneo, con una passione per la narrazione visiva. Il suo lavoro è stato selezionato nella shortlist dei 96° Oscar® e premiato con l\'Oscar Student Academy Awards, il più alto riconoscimento per giovani filmmaker.',
  },
  {
    name: 'Andrea Fusco',
    role: 'Producer & Creative Director',
    description: 'Specializzato in produzioni automotive',
    image: andreaImage,
    bio: 'Esperto in produzioni automotive di alto livello, con un occhio creativo per l\'eccellenza tecnica e narrativa. Ha guidato campagne per i maggiori brand internazionali del settore.',
  },
  {
    name: 'Alessio Zarlenga',
    role: 'Executive Producer',
    description: 'Esperto in produzioni di alto livello',
    image: alessioImage,
    bio: 'Con anni di esperienza nella gestione di produzioni complesse, garantisce l\'eccellenza esecutiva in ogni progetto, dal concept alla post-produzione.',
  },
  {
    name: 'Francesco Camilli',
    role: 'Social Media Manager',
    description: 'Esperto in calendari editoriali e social media management',
    image: francescoImage,
    bio: 'Specializzato nella pianificazione strategica dei calendari editoriali e nella gestione professionale dei social media. Trasforma la visione creativa in presenza digitale efficace e coinvolgente.',
  },
];

export function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1739296385104-f9e3087897f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaWxtbWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4NjcyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] text-white/60 uppercase mb-4">
            About Us
          </p>
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Chi Siamo
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Siamo una realtà di produzione cinematografica giovane, ambiziosa e guidata dalla visione.
              Nasciamo con un'idea semplice ma radicale: raccontare i brand come si raccontano le grandi storie, con linguaggio cinematografico, cura artigianale e una forte identità autoriale.
            </p>
            <p>
              Lavoriamo con aziende, istituzioni e realtà sportive che cercano qualcosa di più di un semplice video: cercano un racconto capace di distinguersi, emozionare e restare nel tempo.
            </p>
            <p>
              Il nostro team unisce creatività contemporanea e competenze tecniche di altissimo livello.
              Alla guida della produzione, Giorgio Ghiotto, giovane regista e videomaker con formazione internazionale e una carriera riconosciuta con una visione unica, capace di parlare un linguaggio universale.
            </p>
            <p>
              Ogni progetto nasce da un dialogo profondo con il brand e prende forma attraverso immagini pensate, costruite e rifinite come un film.
              Perché per noi, ogni produzione è un'opportunità per lasciare il segno.
            </p>
          </div>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative border border-white/20 overflow-hidden aspect-[3/4] hover:border-white/40 transition-all duration-500">
                {/* Image - shown on hover */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredMember === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent backdrop-blur-[1px]" />
                </div>

                {/* Content */}
                <div className={`relative h-full flex flex-col justify-end p-8 transition-all duration-500 ${
                  hoveredMember === index ? '' : 'bg-black/40'
                }`}>
                  <motion.div
                    initial={false}
                    animate={{ y: hoveredMember === index ? 0 : 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl font-light mb-2">{member.name}</h3>
                    <p className="text-sm text-white/60 uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    
                    {/* Description - always visible */}
                    <p className="text-white/70 text-sm mb-4">
                      {member.description}
                    </p>

                    {/* Bio - shown on hover */}
                    <motion.p
                      initial={false}
                      animate={{
                        opacity: hoveredMember === index ? 1 : 0,
                        height: hoveredMember === index ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-white/80 text-sm leading-relaxed overflow-hidden"
                    >
                      {member.bio}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="border border-white/20 p-8"
          >
            <div className="text-5xl font-light mb-2">10+</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Anni di Esperienza
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="border border-white/20 p-8"
          >
            <div className="text-5xl font-light mb-2">50+</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Progetti Realizzati
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border border-white/20 p-8"
          >
            <div className="text-5xl font-light mb-2">5+</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Brand Internazionali
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}