import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, Instagram, Zap, Facebook, Youtube, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES, COMPANY_INFO, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG, SOCIAL_URLS } from '../constants';

const TiktokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="/logo-white.png"
            alt="FECAUCA Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback Text (Hidden by default unless image fails) */}
          <div className="hidden flex items-center gap-2">
            <div className="bg-primary p-1 rounded-lg">
              <Zap className="text-secondary fill-current" size={24} />
            </div>
            <span className="font-heading font-bold text-2xl text-white tracking-tight">
              FE<span className="text-primary">CAUCA</span>
            </span>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-2">
          <div className="flex bg-white/5 rounded-full px-2 py-1 border border-white/5 backdrop-blur-sm mr-6">
            {ROUTES.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-all px-5 py-2 rounded-full ${isActive ? 'text-secondary bg-primary font-bold shadow-[0_0_15px_rgba(255,211,0,0.4)]' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {route.label}
              </NavLink>
            ))}
          </div>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-secondary border border-primary px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,211,0,0.3)] flex items-center gap-2"
          >
            <Zap size={18} className="fill-current" /> COTIZAR
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-white hover:text-primary transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-secondary/95 backdrop-blur-xl fixed inset-0 top-[70px] z-40 border-t border-white/10 overflow-y-auto"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {ROUTES.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    `text-2xl font-heading font-bold py-4 border-b border-white/5 flex items-center justify-between ${isActive ? 'text-primary' : 'text-gray-400'}`
                  }
                >
                  {route.label}
                  {/* Active Indicator */}
                  {/* @ts-ignore */}
                  {({ isActive }) => isActive && <Zap size={20} className="text-primary" />}
                </NavLink>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full text-center bg-primary text-secondary py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2"
              >
                <Zap size={24} className="fill-current" /> COTIZAR POR WHATSAPP
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f1218] text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand & Tagline */}
        <div className="lg:col-span-1">
          <div className="mb-8">
            <img
              src="/logo-white.png"
              alt="FECAUCA Logo"
              className="h-12 w-auto object-contain mb-4"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
            Su socio estratégico en materiales eléctricos certificados.
            Garantía, seguridad y respaldo técnico en Popayán y el Cauca.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="bg-white/5 px-3 py-1.5 rounded-md text-xs font-bold text-primary border border-primary/20 flex items-center gap-1.5">
              <ShieldCheck size={14} /> RETIE
            </div>
            <div className="bg-white/5 px-3 py-1.5 rounded-md text-xs font-bold text-white border border-white/10">ISO 9001</div>
            <div className="bg-white/5 px-3 py-1.5 rounded-md text-xs font-bold text-white border border-white/10">NTC 2050</div>
          </div>

          <div className="flex gap-3">
            {[
              { Icon: Facebook, url: SOCIAL_URLS.facebook },
              { Icon: Instagram, url: SOCIAL_URLS.instagram },
              { Icon: TiktokIcon, url: SOCIAL_URLS.tiktok },
              { Icon: Youtube, url: SOCIAL_URLS.youtube }
            ].map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Google Map & Location */}
        <div className="lg:col-span-1">
          <h4 className="font-heading font-bold text-white mb-6 text-lg">Ubicación Estratégica</h4>
          <div className="rounded-xl overflow-hidden border border-white/10 h-48 mb-4 grayscale hover:grayscale-0 transition-all duration-500 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.204967332163!2d-76.6023!3d2.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjYnMzAuOCJOIDc2wrAzNicwOC4zIlc!5e0!3m2!1sen!2sco!4v1635789000000!5m2!1sen!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa FECAUCA"
            ></iframe>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
          </div>
          <div className="flex items-start gap-2 text-gray-400 text-sm">
            <MapPin size={16} className="text-primary mt-1 shrink-0" />
            <p>{COMPANY_INFO.address}</p>
          </div>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 text-lg">Horario de Atención</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
              <Clock size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-white font-bold mb-1">Lunes a Viernes</p>
                <p>8:00 AM - 6:00 PM</p>
              </div>
            </li>
            <li className="flex gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
              <Clock size={20} className="text-primary shrink-0" />
              <div>
                <p className="text-white font-bold mb-1">Sábados</p>
                <p>8:00 AM - 2:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 text-lg">Contacto Directo</h4>
          <ul className="space-y-6 text-sm text-gray-400">
            <li className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Llámenos</p>
                <p className="text-white font-bold text-lg">{COMPANY_INFO.phone}</p>
              </div>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Escríbanos</p>
                <p className="text-white font-bold">{COMPANY_INFO.email}</p>
              </div>
            </li>
            <li className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white hover:bg-primary hover:text-secondary text-black py-3 rounded-lg transition-all font-bold text-sm shadow-lg hover:shadow-[0_0_20px_rgba(255,211,0,0.4)]"
              >
                Chat WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center">
        <div className="text-gray-600 text-xs font-mono flex flex-col md:flex-row items-center justify-center gap-4">
          <span>&copy; 2026 FECAUCA S.A.S. | Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <NavLink to="/garantia" className="hover:text-primary transition-colors">Política de Garantía</NavLink>
            <NavLink to="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</NavLink>
          </div>
          <span className="hidden md:block">|</span>
          <span>
            Web Creada By <a href="https://creathod.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">CREATHOD</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };