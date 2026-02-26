import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Zap, Truck, CreditCard, Clock, MapPin, Phone, MessageCircle,
    Star, Heart, ThumbsUp, CheckCircle2, Award, Target, TrendingUp, Quote
} from 'lucide-react';
import { PageTransition, Section, Button, Reveal } from '../components/UI';
import EnergyCanvas from '../components/EnergyCanvas';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG, COMPANY_INFO } from '../constants';
import SEO from '../components/SEO';

const Home = () => {
    // LocalBusiness Schema con coordenadas exactas de Popayán
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        "name": "FECAUCA - Ferretería Eléctrica del Cauca",
        "image": "https://fecauca.com/images/logo-fecauca.png",
        "description": "Distribuidores de materiales eléctricos certificados en Popayán. Cables, iluminación LED, breakers Schneider Electric. Envío gratis, garantía de fábrica.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Carrera 11 # 2N-50, Barrio Modelo",
            "addressLocality": "Popayán",
            "addressRegion": "Cauca",
            "postalCode": "190003",
            "addressCountry": "CO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 2.4419,
            "longitude": -76.6063
        },
        "url": "https://fecauca.com",
        "telephone": COMPANY_INFO.phone,
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "14:00"
            }
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Popayán"
            },
            {
                "@type": "State",
                "name": "Cauca"
            }
        ],
        "sameAs": [
            "https://facebook.com/FECAUCA",
            "https://instagram.com/FECAUCA",
            "https://tiktok.com/@FECAUCA"
        ]
    };

    // FAQs para rich snippets
    const faqs = [
        {
            question: "¿Tienen envío gratis en Popayán?",
            answer: "Sí, ofrecemos envío completamente gratis en todo Popayán para compras superiores a $1.000.000. Atendemos Barrio Modelo, Centro, Norte, Sur y todas las zonas de la ciudad."
        },
        {
            question: "¿Qué marcas de cables eléctricos manejan?",
            answer: "Manejamos marcas líderes del mercado como Procables, Centelsa y Condumex. Todos nuestros cables tienen certificación RETIE vigente y garantía de autenticidad."
        },
        {
            question: "¿Hacen entregas a domicilio en Popayán?",
            answer: "Sí, coordinamos entregas a domicilio en todo Popayán. El envío es gratuito por compras superiores a $1.000.000. Contáctanos para más detalles."
        },
        {
            question: "¿Son distribuidores de Schneider Electric?",
            answer: "Sí, comercializamos productos originales de Schneider Electric en Popayán y el Cauca. Ofrecemos precios competitivos y total garantía de autenticidad."
        },
        {
            question: "¿Qué garantía ofrecen en los materiales eléctricos?",
            answer: "Nos regimos estrictamente por las políticas de garantía de cada fabricante. Si un producto presenta fallas de fábrica, gestionamos el trámite para su revisión y cambio según corresponda."
        }
    ];

    const testimonials = [
        {
            name: "Ing. Carlos Martínez",
            role: "Contratista Eléctrico",
            text: "En FECAUCA encuentro todo certificado. Para mis obras no me arriesgo con material de dudosa procedencia. La asesoría técnica es excelente.",
            rating: 5
        },
        {
            name: "Constructora Los Andes",
            role: "Cliente Corporativo",
            text: "La logística de entrega es impecable. Nos llevan el material directo a la obra en Popayán sin costo adicional. Muy recomendados.",
            rating: 5
        },
        {
            name: "María Fernanda López",
            role: "Cliente Residencial",
            text: "Me asesoraron para cambiar toda la iluminación de mi casa a LED. Bajó el recibo de la luz y la casa se ve hermosa. Gracias por la paciencia.",
            rating: 5
        }
    ];

    return (
        <PageTransition>
            <SEO
                title="Materiales Eléctricos Certificados en Popayán - Precio Justo Garantizado"
                description="✅ Materiales eléctricos certificados RETIE en Popayán. Cables, iluminación LED, breakers Schneider Electric. 🚚 Envío GRATIS >$1M. 💬 Cotiza por WhatsApp - Respuesta en 5 min."
                keywords={[
                    "materiales eléctricos popayán",
                    "ferretería eléctrica popayán",
                    "cables certificados retie popayán",
                    "iluminación led popayán",
                    "breakers popayán",
                    "distribuidores schneider electric popayán",
                    "materiales eléctricos barrio modelo",
                    "ferretería eléctrica cauca",
                    "herramientas electricistas popayán"
                ]}
                schema={localBusinessSchema}
                faq={faqs}
            />

            {/* HERO SECTION - DARK THEME & HIGH CONTRAST */}
            <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-[#050505] to-[#050505] opacity-90"></div>
                    <div className="opacity-40">
                        <EnergyCanvas />
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-24 pb-48 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge de Urgencia/Seguridad */}
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-10 backdrop-blur-md animate-fade-in shadow-[0_0_20px_rgba(239,68,68,0.1)]">
                            <ShieldCheck size={18} className="text-red-500" />
                            <span className="text-sm font-bold tracking-widest uppercase">Evite Riesgos Eléctricos</span>
                        </div>

                        {/* H1 - Impacto & Dolor */}
                        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                            Todo en Materiales Eléctricos <br />
                            <span className="text-primary">
                                Certificados en Popayán
                            </span>
                        </h1>

                        {/* Descripción - Solución & Autoridad */}
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                            Distribuidores directos. Tenemos las mejores marcas como <strong className="text-white font-medium">Schneider Electric, Procables y Centelsa</strong>.
                            <br />
                            <span className="text-primary font-bold mt-2 block">Stock permanente y precios justos.</span>
                        </p>

                        {/* CTAs de Alta Conversión */}
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-24">
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA, quiero proteger mi instalación eléctrica. Necesito cotizar materiales certificados.")}`}
                                variant="primary"
                                size="lg"
                                icon={<MessageCircle size={24} />}
                                className="w-full md:w-auto text-black font-extrabold text-lg px-8 py-4 shadow-[0_0_40px_rgba(250,204,21,0.3)] hover:shadow-[0_0_60px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                COTIZAR MATERIALES
                                <span className="block text-[10px] font-normal uppercase tracking-widest mt-1">Respuesta Prioritaria</span>
                            </Button>
                            <Button
                                to="/productos"
                                variant="outline"
                                size="lg"
                                className="w-full md:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4"
                            >
                                Ver Catálogo
                            </Button>
                        </div>

                        {/* Elementos de Confianza (Trust Signals) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                            {[
                                {
                                    title: "Cero Falsificaciones",
                                    desc: "Distribuidores directos de fábrica. Sin intermediarios dudosos.",
                                    icon: <ShieldCheck className="text-primary w-8 h-8" />
                                },
                                {
                                    title: "Entrega a Domicilio",
                                    desc: "Envío gratis en Popayán por compras superiores a $1M. Coordinamos su despacho con agilidad.",
                                    icon: <Truck className="text-primary w-8 h-8" />
                                },
                                {
                                    title: "Asesoría Presencial",
                                    desc: "Visítenos en nuestra sede. Nuestros expertos le ayudarán a realizar compras inteligentes para su proyecto.",
                                    icon: <Zap className="text-primary w-8 h-8" />
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex items-start gap-5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-default hover:-translate-y-1 shadow-lg">
                                    <div className="mt-1 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(250,204,21,0.1)]">{item.icon}</div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="mt-20 text-gray-500 text-sm tracking-wide">
                            ¿Ya tiene una cotización? <span className="text-primary font-bold underline cursor-pointer hover:text-yellow-300 transition-colors ml-1">Contáctenos para recibir nuestra mejor oferta.</span>
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-600 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Descubra Más</span>
                    <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
            </div>

            {/* H2: POR QUÉ SOMOS LA MEJOR FERRETERÍA ELÉCTRICA DE POPAYÁN */}
            <Section className="bg-secondary py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                            ¿Por Qué Somos la Mejor Ferretería Eléctrica de Popayán?
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Más de 15 años de experiencia en el sector eléctrico.
                            Desde 2021, abrimos nuestras puertas como almacén para ofrecerle <strong className="text-white">soluciones especializadas 100% en electricidad</strong>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* H3: Distribuidores Directos */}
                        <Reveal>
                            <div className="bg-surface p-8 rounded-3xl border border-white/10 shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <Target size={32} />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                    Distribuidores Directos de Fábrica
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Trabajamos directamente con las mejores marcas del mercado. Esto nos permite ofrecerle:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Precios altamente competitivos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Stock permanente de productos</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Garantía de autenticidad</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* H3: Ubicación Estratégica */}
                        <Reveal delay={0.2}>
                            <div className="bg-surface p-8 rounded-3xl border border-white/10 shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                    Ubicación Estratégica
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Estamos ubicados en el corazón de Popayán para su comodidad.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Fácil acceso y parqueo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Cerca a las zonas de mayor desarrollo</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="text-gray-400 text-sm">Atención rápida en mostrador</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* H3: Respaldo y Garantía */}
                        <Reveal delay={0.4}>
                            <div className="bg-surface p-8 rounded-3xl border border-white/10 shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                    Respaldo y Garantía
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Su inversión está segura con nosotros.
                                    Nos ceñimos estrictamente a las políticas de garantía de cada fabricante.
                                </p>
                                <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
                                    <p className="text-primary font-bold text-sm">
                                        ⚡ Gestión transparente y directa
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Section>

            {/* TESTIMONIALS SECTION */}
            <Section className="bg-background py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
                            Lo Que Dicen Nuestros Clientes
                        </h2>
                        <p className="text-gray-400 text-lg">
                            La confianza se gana con hechos. Esto opinan quienes ya protegen sus proyectos con FECAUCA.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="bg-surface p-8 rounded-3xl border border-white/10 relative h-full flex flex-col">
                                    <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} size={16} className="fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.text}"</p>
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-primary text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </Section>

            {/* H2: CATÁLOGO DE MATERIALES ELÉCTRICOS EN POPAYÁN */}
            <Section className="bg-secondary py-24 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                            Catálogo de Materiales Eléctricos en Popayán
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Nos especializamos exclusivamente en el ramo eléctrico. <br />
                            <span className="text-red-400 font-bold text-sm bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 mt-2 inline-block">
                                NO vendemos materiales de construcción civil (cemento, arena, etc.)
                            </span>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* H3: Cables y Alambres Certificados RETIE */}
                        <div className="bg-surface p-10 rounded-3xl shadow-xl hover:border-primary/30 transition-all duration-300 border border-white/10 group h-full flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Zap size={40} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                Cables y Alambres Certificados RETIE
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Cables THW, THHN, fotovoltaicos. Marcas: Procables, Centelsa, Condumex.
                                Todos con certificación RETIE vigente.
                            </p>
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero cotizar cables eléctricos en Popayán")}`}
                                variant="ghost"
                                size="sm"
                                className="!text-primary hover:text-white font-bold"
                            >
                                Cotizar Cables →
                            </Button>
                        </div>

                        {/* H3: Iluminación LED Industrial y Residencial */}
                        <div className="bg-surface p-10 rounded-3xl shadow-xl hover:border-primary/30 transition-all duration-300 border border-white/10 group h-full flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Star size={40} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                Iluminación LED Industrial y Residencial
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Paneles LED, reflectores, luces decorativas. Ahorre hasta 80% en energía.
                                Garantía de 2 años.
                            </p>
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero cotizar iluminación LED en Popayán")}`}
                                variant="ghost"
                                size="sm"
                                className="!text-primary hover:text-white font-bold"
                            >
                                Cotizar LED →
                            </Button>
                        </div>

                        {/* H3: Breakers y Tableros Schneider Electric */}
                        <div className="bg-surface p-10 rounded-3xl shadow-xl hover:border-primary/30 transition-all duration-300 border border-white/10 group h-full flex flex-col">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={40} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                Breakers y Tableros Schneider Electric
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Totalizadores, DPS, diferenciales, cajas de distribución.
                                Protección certificada para su instalación.
                            </p>
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero cotizar breakers en Popayán")}`}
                                variant="ghost"
                                size="sm"
                                className="!text-primary hover:text-white font-bold"
                            >
                                Cotizar Breakers →
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* H2: ATENDEMOS TODO POPAYÁN Y EL CAUCA */}
            <Section className="bg-background text-white py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Atendemos Todo <span className="text-primary">Popayán y el Cauca</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-2xl">
                            Somos la ferretería eléctrica con mayor cobertura en la región.
                            Envíos a toda la ciudad y municipios cercanos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* H3: Zonas de Popayán que Atendemos */}
                        <div className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                                <MapPin className="text-primary" />
                                Zonas de Popayán que Atendemos
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Barrio Modelo",
                                    "Centro Histórico",
                                    "Norte de Popayán",
                                    "Sur de Popayán",
                                    "Unicauca",
                                    "Fundación Universitaria",
                                    "Zona Industrial",
                                    "Todas las comunas"
                                ].map((zona, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{zona}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* H3: Envíos a Municipios del Cauca */}
                        <div className="bg-surface border border-white/10 p-8 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-3">
                                <Truck className="text-primary" />
                                Envíos a Municipios del Cauca
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Santander de Quilichao",
                                    "Piendamó",
                                    "Timbío",
                                    "Cajibío",
                                    "Sotará",
                                    "Puracé",
                                    "Totoró",
                                    "Todo el Cauca"
                                ].map((municipio, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                                        <span className="text-sm text-gray-300">{municipio}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* H2: PREGUNTAS FRECUENTES SOBRE MATERIALES ELÉCTRICOS EN POPAYÁN */}
            <Section className="bg-secondary py-24 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="font-heading text-4xl font-bold text-white text-center mb-16">
                        Preguntas Frecuentes sobre Materiales Eléctricos en Popayán
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-surface rounded-2xl border border-white/10 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-white hover:bg-white/5 transition-colors list-none">
                                    <span className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs flex-shrink-0">?</div>
                                        {faq.question}
                                    </span>
                                    <span className="transition-transform group-open:rotate-180 text-primary">▼</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* CTA Final */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-400 mb-6">¿Tiene más preguntas sobre materiales eléctricos en Popayán?</p>
                        <Button
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA, tengo una pregunta sobre materiales eléctricos")}`}
                            variant="primary"
                            size="lg"
                            className="text-black font-bold"
                        >
                            💬 Hablar con un Asesor - Respuesta en 5 min
                        </Button>
                    </div>
                </div>
            </Section>
        </PageTransition>
    );
};

export default Home;
