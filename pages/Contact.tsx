import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, CheckCircle2, Camera, Zap, ArrowRight, Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/UI';
import { COMPANY_INFO, WHATSAPP_NUMBER, SOCIAL_URLS } from '../constants';

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

const Contact = () => {
    // SEO
    useEffect(() => {
        document.title = "Contacto y Ubicación | Ferretería Eléctrica FECAUCA Popayán";
        document.querySelector('meta[name="description"]')?.setAttribute('content', "Visítanos en Cra 11 # 2N-50, Popayán. Horario de atención, teléfono y WhatsApp. Materiales eléctricos certificados cerca de ti.");
    }, []);

    return (
        <PageTransition>
            <div className="min-h-screen bg-background relative overflow-hidden">

                {/* BACKGROUND GRID ANIMATION */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </div>

                <div className="flex flex-col lg:flex-row min-h-screen pt-20 relative z-10">

                    {/* LEFT: INFO & MAP SIMULATION */}
                    <div className="lg:w-1/2 flex flex-col border-r border-white/10">
                        <div className="p-12 lg:p-20 pb-0 flex-grow flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block bg-primary/10 text-primary border border-primary/20 rounded-md px-4 py-1 text-xs font-black uppercase tracking-widest mb-6 backdrop-blur-sm">
                                    📍 Popayán, Cauca
                                </div>
                                <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                    Hablemos de <span className="text-primary block">Energía</span>
                                </h1>
                                <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed font-light">
                                    Visítanos en nuestra sede principal. Estamos listos para asesorarte en tu próximo proyecto eléctrico con la honestidad que nos caracteriza.
                                </p>

                                <div className="space-y-10">
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-lg">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-white mb-1 uppercase tracking-wide">Visítanos</h3>
                                            <address className="text-gray-400 text-lg not-italic">{COMPANY_INFO.address}</address>
                                            <p className="text-primary text-sm mt-1 font-bold">Barrio Modelo</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-lg">
                                            <Clock size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl text-white mb-1 uppercase tracking-wide">Horario de Atención</h3>
                                            <p className="text-gray-400">{COMPANY_INFO.hours}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Síguenos en Redes</h4>
                                    <div className="flex gap-4">
                                        <a href={SOCIAL_URLS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 text-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-lg">
                                            <Facebook size={24} />
                                        </a>
                                        <a href={SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 text-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-lg">
                                            <Instagram size={24} />
                                        </a>
                                        <a href={SOCIAL_URLS.tiktok} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 text-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-lg">
                                            <TiktokIcon size={24} />
                                        </a>
                                        <a href={SOCIAL_URLS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface border border-white/10 text-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-secondary hover:border-primary transition-all shadow-lg">
                                            <Youtube size={24} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* ABSTRACT ENERGY MAP - LINKED */}
                        <a
                            href="https://maps.app.goo.gl/g9B4KW6NtEanoG1a9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-64 md:h-80 relative overflow-hidden mt-12 border-t border-white/10 bg-secondary group cursor-pointer"
                            aria-label="Ver ubicación en Google Maps"
                        >
                            {/* Map Grid */}
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            {/* Center Pulse (Location) */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="relative">
                                    <div className="w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(255,222,0,0.9)] z-20 relative border-4 border-secondary" />
                                    <div className="absolute inset-0 w-6 h-6 bg-primary rounded-full animate-ping opacity-75" />
                                    <div className="absolute -inset-12 border border-primary/30 rounded-full animate-pulse" />

                                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-100 transition-opacity">
                                        <div className="bg-primary text-secondary text-xs font-black px-4 py-1 rounded shadow-lg uppercase tracking-wider flex items-center gap-2">
                                            Sede Principal <ExternalLink size={10} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <motion.line x1="0" y1="50%" x2="50%" y2="50%" stroke="#FFDE00" strokeWidth="2" strokeOpacity="0.3"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                                <motion.line x1="100%" y1="50%" x2="50%" y2="50%" stroke="#FFDE00" strokeWidth="2" strokeOpacity="0.3"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
                                <motion.line x1="50%" y1="0" x2="50%" y2="50%" stroke="#FFDE00" strokeWidth="2" strokeOpacity="0.3"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
                            </svg>
                        </a>
                    </div>

                    {/* RIGHT: WHATSAPP CONVERSION CARD */}
                    <div className="lg:w-1/2 bg-surface p-8 lg:p-20 flex flex-col justify-center relative">
                        {/* Background Texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,222,0,0.05),transparent_50%)]" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="bg-secondary border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                {/* Top Highlight Line */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent" />

                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                    <span className="text-green-500 font-bold text-sm uppercase tracking-widest">Disponible Ahora</span>
                                </div>

                                <h2 className="font-heading text-3xl md:text-4xl font-black text-white mb-6">
                                    Cotiza sin <br /> complicaciones
                                </h2>

                                <p className="text-gray-400 mb-8 text-lg">
                                    Olvida los formularios largos. Escríbenos directamente a WhatsApp y obtén respuesta de un humano experto.
                                </p>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Clock size={20} />
                                        </div>
                                        <span className="font-medium">Respuesta en menos de 2 horas</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Camera size={20} />
                                        </div>
                                        <span className="font-medium">Envía fotos de tu material o lista</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Zap size={20} />
                                        </div>
                                        <span className="font-medium">Cotización formal en PDF al instante</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-white">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="font-medium">Atención comercial personalizada</span>
                                    </div>
                                </div>

                                <motion.a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA 💡 Quiero realizar una cotización / consulta")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary text-secondary font-black uppercase py-6 rounded-xl hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,222,0,0.3)] flex items-center justify-center gap-3 text-xl group"
                                >
                                    <MessageCircle size={28} className="fill-secondary group-hover:fill-secondary" />
                                    Iniciar Chat en WhatsApp
                                    <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                </motion.a>

                                <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-wider font-bold">
                                    Sin compromisos • Respuesta Rápida
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
