import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Clients } from '@/app/components/Clients';
import { Portfolio } from '@/app/components/Portfolio';
import { Services } from '@/app/components/Services';
import { Awards } from '@/app/components/Awards';
import { Team } from '@/app/components/Team';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Clients />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="servizi">
        <Services />
      </div>
      <div id="premi">
        <Awards />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contatti">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
