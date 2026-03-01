import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/app/components/ui/dialog';
import { ScrollArea } from '@/app/components/ui/scroll-area';
import alpineMiniatura from '@/asset/e499b0cba9875088098073fb7f6ae9e3e49393bd.webp';
import alpineImage2 from '@/asset/bef3ba5ab97bb721758518cdf563d7e2d00dc2e7.webp';
import alpineImage3 from '@/asset/60cf39b76ea669005f289c03be9d8409c3d714a5.webp';
import marinaMilitareThumb from '@/asset/9d9c616c0cfc3f854e09d473ce244cfabed35d83.webp';
import marinaMilitare1 from '@/asset/6b1a8a5682ebf749a6726c246632abaab3cb785c.webp';
import marinaMilitare2 from '@/asset/916d6f4e4be151009bf38502c344b0c22ca699af.webp';
import marinaMilitare3 from '@/asset/76613842a22384040593b4b3057471443f257866.webp';
import mercedes1 from '@/asset/d219ef526074781322009ff5b84e0a8a671ff1dd.webp';
import mercedes2 from '@/asset/5de3da4a57a76c929856c52be51ce633d7749d92.webp';
import mercedes3 from '@/asset/aa3afb9ffcbb505819dcd270437c4afb06f8a09d.webp';
import mercedes4 from '@/asset/0fba19834a37abac3373af86a3b32164a9b7a438.webp';
import unThumb from '@/asset/f4bd834a4a470201821b6bce01e6dea0c9ee9e65.webp';
import un1 from '@/asset/abad8928754e1cdd65d0f6a010d80a6cb53c25e9.webp';
import un2 from '@/asset/f4bd834a4a470201821b6bce01e6dea0c9ee9e65.webp';
import un3 from '@/asset/6876e4ba517b489a5e8c80e3dd1fc7834b391ffe.webp';
import un4 from '@/asset/cdf57d774350dc707c29c73e2af4f5600fd2504b.webp';
import goretex1 from '@/asset/87431edf0fa8c1dda27cf7a118b313ff00daeab9.webp';
import goretex2 from '@/asset/5ab216da8659705fee3aa9990d3e9f12521e5eab.webp';
import goretex3 from '@/asset/a5ead6ac1d52216598d2c5897b206894c63fa93b.webp';
import goretex4 from '@/asset/ac9fd393277261dd9c6028e23e8a0445aa7f3d95.webp';
import osprey1 from '@/asset/9b339eadc9fb0a8887726fc419d1623db3c1153e.webp';
import osprey2 from '@/asset/dcd9c59717ea5816519521ea1d7ea9fadb5a14f0.webp';
import osprey3 from '@/asset/353dafe8f24b6d5cf2c0dfa253f0b90b1d0f4b79.webp';
import osprey4 from '@/asset/654a42203813daa9c2831c199b3d27981055c4c2.webp';
import udinese1 from '@/asset/36327f56ad87dcc3cc164700595004f42449f0e1.webp';
import udinese2 from '@/asset/28160f9526ae76ac636b62101dbf1f387e287fd2.webp';
import udinese3 from '@/asset/5e80eefa84172544ccbd84db68c74b2c9c12e5c3.webp';
import renault1 from '@/asset/76e057c52598346b7bcbacbbcd6275e304625b6a.webp';
import renault2 from '@/asset/2dcc9b12d069b3f72cda6e5d540a77b2022f9c6a.webp';
import renault3 from '@/asset/5d9ea7a98990db580806eefc44c6cacb9fb4bb38.webp';
import renault4 from '@/asset/202658a14abb0aa1d54a5f9e7483a9d59cedc59a.webp';
import renault5 from '@/asset/b5f8bc4fe1eac87ad7e8173ea992afb214ed0909.webp';
import renault6 from '@/asset/594531264e0a15d327c5effb7bfb5f6fa6b888c6.webp';
import renault7 from '@/asset/edf651ea95af7cd5dd61be8f76a2fb0b47ad1584.webp';

const projects = [
  {
    id: 1,
    title: 'Alpine Osmosis',
    category: 'Automotive',
    image: alpineImage2,
    year: '2025',
    description: 'Un racconto visivo che mette in dialogo uomo e macchina. Alpine Osmosis nasce dal parallelismo tra la salita di uno scalatore e il movimento dell’Alpine A110 tra le curve di montagna: due percorsi diversi, un’unica tensione verso la vetta.',
    challenge: 'Raccontare le prestazioni e l’anima sportiva dell’Alpine A110 senza ricorrere ai codici classici dello spot automotive, trasformando la guida in un’esperienza sensoriale ed emotiva.',
    solution: 'Un linguaggio cinematografico che costruisce un parallelismo visivo e narrativo tra l’ascesa dello scalatore Bruno Pisani e la traiettoria dell’Alpine A110. Curve e pareti diventano lo stesso gesto, la stessa sfida: dove la salita dello scalatore e la corsa dell’Alpine seguono lo stesso ritmo, la stessa tensione, la stessa visione.',
    videoUrl: 'https://www.youtube.com/embed/kEAgKYlHHa8?si=sT4UyISxF5Tk4lfU',
    gallery: [
      alpineMiniatura,
      alpineImage2,
      alpineImage3,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 2,
    title: 'Renault',
    category: 'Press',
    image: renault1,
    year: '2024',
    description: 'Un cortometraggio d\'autore che esplora il futuro della mobilità elettrica attraverso gli occhi di Renault. Il progetto combina narrazione emozionale con spettacolari sequenze di prodotto.',
    challenge: 'Comunicare l\'innovazione tecnologica attraverso un linguaggio cinematografico emotivo e coinvolgente.',
    solution: 'Un approccio narrativo che bilancia perfettamente technical shots e storytelling umano, con una fotografia ispirata al cinema d\'autore europeo.',
    videoUrls: [
      'https://www.youtube.com/embed/MiYh6E5NDcw?si=03NAJHvOqtAahvQY',
      'https://www.youtube.com/embed/HJvdKyQ_gZo?si=E1VY9ioY3ROGkN4a'
    ],
    gallery: [
      renault1,
      renault2,
      renault3,
      renault4,
      renault5,
      renault6,
      renault7,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 3,
    title: 'Udinese Calcio / Dacia',
    category: 'Sports',
    image: udinese1,
    year: '2024',
    description: 'Un video emozionale per l\'apertura della stagione dell\'Udinese Calcio. Riprese ad alta intensità che catturano la passione dei tifosi e l\'adrenalina del calcio professionistico.',
    challenge: 'Trasmettere l\'energia e la passione del calcio professionistico in un formato che risuoni con i tifosi e attragga nuovi supporter.',
    solution: 'Utilizzo di slow motion drammatici, riprese aeree dello stadio e interviste intime con giocatori e tifosi per creare un racconto autentico.',
    videoUrl: 'https://www.youtube.com/embed/tN5gO22eKe8?si=AaLWD7pSCnIKyufe',
    gallery: [
      udinese1,
      udinese2,
      udinese3,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 4,
    title: 'Marina Militare - Anime di Coraggio',
    category: 'Institutional',
    image: marinaMilitare3,
    year: '2025',
    description: 'A bordo della nave Montecuccoli, giovani marinai della Marina Militare affrontano l\'ultima tappa del loro viaggio mondiale: attraversare il Mar Rosso. Un racconto di cameratismo, sacrificio e dedizione alla patria.',
    challenge: 'Raccontare il lato umano della Marina Militare durante una missione globale, trasformando una complessa operazione navale in un racconto autentico di coraggio, sacrificio e spirito di squadra.',
    solution: 'Uno sguardo cinematografico senza filtri, immerso nella vita a bordo. La macchina da presa entra nell\'azione e vive la missione dall\'interno: due mesi trascorsi sulla nave Montecuccoli per trasformare l\'esperienza reale in un racconto potente, umano e necessario.',
    videoUrl: 'https://www.youtube.com/embed/-peB0UaLfUs?t=19',
    gallery: [
      marinaMilitare1,
      marinaMilitare2,
      marinaMilitare3,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 5,
    title: 'Mercedes-Benz',
    category: 'Spot',
    image: mercedes1,
    year: '2025',
    description: 'Un cortometraggio d\'autore che esplora il futuro della lussuria attraverso gli occhi di Mercedes-Benz. Il progetto combina narrazione emozionale con spettacolari sequenze di prodotto.',
    challenge: 'Comunicare l\'innovazione tecnologica attraverso un linguaggio cinematografico emotivo e coinvolgente.',
    solution: 'Un approccio narrativo che bilancia perfettamente technical shots e storytelling umano, con una fotografia ispirata al cinema d\'autore europeo.',
    gallery: [
      mercedes1,
      mercedes2,
      mercedes3,
      mercedes4,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 6,
    title: 'Gore-Tex - Beyond Limits',
    category: 'Outdoor',
    image: goretex1,
    year: '2024',
    description: 'Un racconto immersivo tra uomo, natura ed elementi estremi. Seguendo l’alpinista Tamara Lunger nel cuore del Parco Nazionale d’Abruzzo, il progetto esplora il rapporto profondo tra performance, resistenza e ambiente, dove il confine tra protezione e libertà diventa invisibile.',
    challenge: 'Raccontare l’affidabilità e la tecnologia GORE-TEX senza ricorrere a una narrazione tecnica, valorizzando l’esperienza reale di chi vive la montagna come spazio di sfida, ascolto e rispetto.',
    solution: 'Un approccio cinematografico intimo e naturale, che segue Tamara Lunger nel suo percorso attraverso paesaggi incontaminati e condizioni mutevoli. La macchina da presa accompagna il movimento, il respiro e il silenzio, lasciando che sia l’esperienza diretta a raccontare la performance GORE-TEX attraverso gesti autentici e immagini essenziali.',
    gallery: [
      goretex1,
      goretex2,
      goretex3,
      goretex4,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 7,
    title: 'United Nations - Invisible Dreams',
    category: 'Documentary',
    image: unThumb,
    year: '2024',
    description: 'Un cortometraggio che dà voce a chi vive nell’invisibilità giuridica. Invisible Dreams racconta, attraverso un linguaggio cinematografico intenso e rispettoso, la realtà di una donna senza documenti in Bosnia ed Erzegovina, priva di cittadinanza, diritti e accesso ai servizi essenziali — una storia personale che illumina una condizione umana e sociale spesso ignorata.',
    challenge: 'Rappresentare con autenticità e profondità la condizione di apolidia — l’essere privi di cittadinanza, diritti e identità ufficiale — in modo da superare la mera testimonianza e raggiungere una dimensione narrativa che induca empatia, consapevolezza e riflessione, mantenendo rispetto e dignità per chi vive questa realtà.',
    solution: 'Un approccio cinematografico autentico e sensibile, costruito per seguire la protagonista nella sua quotidianità senza documenti, restituendo con immagini e ritmo narrativo la complessità emotiva e sociale della sua esperienza. Il film trasforma una condizione spesso invisibile in una narrazione visiva potente e coinvolgente, capace di parlare al pubblico internazionale e contribuire alla consapevolezza globale sul tema della statelessness.',
    gallery: [
      un1,
      un2,
      un3,
      un4,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
  {
    id: 8,
    title: 'Osprey',
    category: 'Commercial',
    image: osprey1,
    year: '2025',
    description: 'Un film di lancio che porta il prodotto nel suo ambiente più estremo. Girato in Sicilia, il progetto segue ciclisti esperti di downhill, esplorando il confine tra velocità, controllo e resistenza, dove ogni scelta dell’equipaggiamento diventa parte della performance.',
    challenge: 'Comunicare le qualità tecniche di uno zaino da ciclismo senza ricorrere a una narrazione dimostrativa, raccontando invece l’affidabilità del prodotto attraverso un’esperienza reale, estrema e senza compromessi.',
    solution: 'Un approccio cinematografico immersivo, costruito sul movimento e sull’adrenalina della discesa. La macchina da presa segue i rider nei passaggi più tecnici, lasciando che siano il ritmo, la fatica e la precisione del gesto a raccontare le prestazioni dello zaino Osprey in condizioni limite.',
    gallery: [
      osprey1,
      osprey2,
      osprey3,
      osprey4,
    ],
    credits: {
      director: 'Giorgio Ghiotto',
      cinematography: 'Andrea Fusco',
      producer: 'Alessio Zarlenga',
    }
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ index: number; images: string[] } | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleNextImage = () => {
    if (!lightboxImage) return;
    const nextIndex = (lightboxImage.index + 1) % lightboxImage.images.length;
    setLightboxImage({ ...lightboxImage, index: nextIndex });
  };

  const handlePrevImage = () => {
    if (!lightboxImage) return;
    const prevIndex = (lightboxImage.index - 1 + lightboxImage.images.length) % lightboxImage.images.length;
    setLightboxImage({ ...lightboxImage, index: prevIndex });
  };

  const handleNextVideo = () => {
    if (!selectedProject) return;
    const videos = 'videoUrls' in selectedProject ? selectedProject.videoUrls : [selectedProject.videoUrl];
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    if (!selectedProject) return;
    const videos = 'videoUrls' in selectedProject ? selectedProject.videoUrls : [selectedProject.videoUrl];
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVideos = (project: typeof projects[0]) => {
    if ('videoUrls' in project) return project.videoUrls;
    if ('videoUrl' in project) return [project.videoUrl];
    return [];
  };

  const hasVideo = (project: typeof projects[0]) => {
    return 'videoUrl' in project || 'videoUrls' in project;
  };

  return (
    <section className="bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.3em] text-white/60 uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-white">
            Portfolio Selezionato
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onClick={() => {
                setSelectedProject(project);
                setCurrentVideoIndex(0);
              }}
              className="group relative aspect-[16/10] overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/70 uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-white/70">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <motion.div
                    className="inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <Play className="h-4 w-4" />
                    <span className="text-sm">Watch Case Study</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-[95vw] w-[95vw] h-[95vh] bg-black border-white/10 p-0 overflow-y-auto">
            {selectedProject && (
              <>
                <DialogTitle className="sr-only">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedProject.description}
                </DialogDescription>
              </>
            )}
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>

                  {/* Hero Image */}
                  <div className="relative h-[50vh] overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-12">
                      <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-xs tracking-[0.2em] text-white/70 uppercase">
                            {selectedProject.category}
                          </span>
                          <span className="text-white/30">•</span>
                          <span className="text-xs text-white/70">
                            {selectedProject.year}
                          </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
                          {selectedProject.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-12 py-16 space-y-16">
                    {/* Description */}
                    <div className="max-w-4xl">
                      <p className="text-xl text-white/80 leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div>
                          <h3 className="text-sm tracking-[0.2em] text-white/60 uppercase mb-3">
                            La Sfida
                          </h3>
                          <p className="text-white/70 leading-relaxed">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm tracking-[0.2em] text-white/60 uppercase mb-3">
                            La Soluzione
                          </h3>
                          <p className="text-white/70 leading-relaxed">
                            {selectedProject.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Video Embed */}
                    {hasVideo(selectedProject) && (
                      <div className="max-w-6xl">
                        <h3 className="text-sm tracking-[0.2em] text-white/60 uppercase mb-6">
                          Video Completo
                        </h3>
                        <div className="relative">
                          <div className="relative aspect-video bg-white/5 rounded-lg overflow-hidden">
                            <iframe
                              key={currentVideoIndex}
                              src={getVideos(selectedProject)[currentVideoIndex]}
                              title={selectedProject.title}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          
                          {/* Video Navigation */}
                          {getVideos(selectedProject).length > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-6">
                              <button
                                onClick={handlePrevVideo}
                                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
                              >
                                <ChevronLeft className="h-6 w-6 text-white" />
                              </button>
                              
                              <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                                <span className="text-white text-sm">
                                  {currentVideoIndex + 1} / {getVideos(selectedProject).length}
                                </span>
                              </div>
                              
                              <button
                                onClick={handleNextVideo}
                                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:scale-110"
                              >
                                <ChevronRight className="h-6 w-6 text-white" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Gallery */}
                    <div>
                      <h3 className="text-sm tracking-[0.2em] text-white/60 uppercase mb-6">
                        Behind The Scenes
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {selectedProject.gallery.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxImage({ index, images: selectedProject.gallery });
                            }}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                                  <Play className="h-5 w-5 text-white ml-1" />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Credits */}
                    <div className="border-t border-white/10 pt-12">
                      <h3 className="text-sm tracking-[0.2em] text-white/60 uppercase mb-6">
                        Credits
                      </h3>
                      <div className="grid md:grid-cols-3 gap-8">
                        <div>
                          <p className="text-sm text-white/50 mb-1">Director</p>
                          <p className="text-white">{selectedProject.credits.director}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/50 mb-1">Director of Photography</p>
                          <p className="text-white">{selectedProject.credits.cinematography}</p>
                        </div>
                        <div>
                          <p className="text-sm text-white/50 mb-1">Producer</p>
                          <p className="text-white">{selectedProject.credits.producer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Image Lightbox Modal */}
        <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
          <DialogContent className="max-w-[100vw] w-[100vw] h-[100vh] bg-black/95 border-none p-0 flex items-center justify-center">
            {lightboxImage && (
              <>
                <DialogTitle className="sr-only">
                  Image Gallery
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Behind the scenes image {lightboxImage.index + 1} of {lightboxImage.images.length}
                </DialogDescription>
              </>
            )}
            <AnimatePresence mode="wait">
              {lightboxImage && (
                <motion.div
                  key={lightboxImage.index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center p-4"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6 text-white" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                    <span className="text-white text-sm">
                      {lightboxImage.index + 1} / {lightboxImage.images.length}
                    </span>
                  </div>

                  {/* Previous Button */}
                  {lightboxImage.images.length > 1 && (
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="h-8 w-8 text-white" />
                    </button>
                  )}

                  {/* Next Button */}
                  {lightboxImage.images.length > 1 && (
                    <button
                      onClick={handleNextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="h-8 w-8 text-white" />
                    </button>
                  )}

                  {/* Image */}
                  <img
                    src={lightboxImage.images[lightboxImage.index]}
                    alt={`Gallery image ${lightboxImage.index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}