import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-light mb-4">
              AFP<span className="font-normal text-sm ml-2 text-white/60">Automotive Film Production</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Produzioni video e spot pubblicitari di altissimo livello per brand internazionali.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-white/60 hover:text-white transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#premi" className="text-white/60 hover:text-white transition-colors">
                  Premi
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/60 hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-white/60 hover:text-white transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 text-white/80">
              Seguici
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@production.com"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-white/60 text-sm">
              <div className="mb-2">info@automotivefilmproduction.com</div>
              <div>+39 012 345 6789</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2026 AFP - Automotive Film Production. All rights reserved.
          </div>
          <div className="flex gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}