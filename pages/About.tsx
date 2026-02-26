
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, BadgeCheck, Target, MapPin, Trophy, Brain, Lightbulb, ArrowRight } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';

const About = () => {
    // SEO
    useEffect(() => {
        document.title = "Quiénes Somos | FECAUCA - Expertos en Energía Popayán";
        document.querySelector('meta[name="description"]')?.setAttribute('content', "Conoce a FECAUCA, tu ferretería eléctrica de confianza en Popayán. Más de 15 años de experiencia brindando soluciones de ingeniería y suministros certificados.");
    }, []);

    return (
        <PageTransition>
            {/* HEADER */}
            <div className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20 bg-background">
                <div className="absolute inset-0 tech-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            El ADN <span className="text-primary">FECAUCA</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                            Trayectoria técnica y honestidad radical al servicio de Popayán.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* HISTORIA */}
            <Section className="py-24 bg-secondary relative border-y border-white/5">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
                            Origen del <span className="text-primary">Proyecto</span>
                        </h2>
                        <div className="text-gray-400 text-lg leading-relaxed space-y-6 font-light">
                            <p>Aunque el almacén <strong>FECAUCA</strong> abrió sus puertas oficialmente en <strong>2021</strong>, nuestra historia no empezó ahí.</p>
                            <p>Nuestro equipo fundador trae consigo una <strong>experiencia de más de 15 años</strong> en el sector eléctrico del Cauca. Conocemos cada problema, cada marca y cada necesidad del mercado porque hemos estado ahí desde mucho antes.</p>
                            <div className="bg-white/5 border-l-2 border-primary p-6">
                                <p className="text-white italic">
                                    "Fundamos FECAUCA en 2021 para materializar 15 años de aprendizaje: ofrecer ingeniería real, no solo ventas."
                                </p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        className="bg-black border border-white/10 rounded-3xl p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Lightbulb size={64} className="text-primary mb-8" strokeWidth={1} />
                        <h3 className="font-heading text-4xl font-bold text-white mb-2">EST. 2021</h3>
                        <div className="space-y-1">
                            <p className="text-primary font-mono uppercase tracking-widest text-sm">Fundación Oficial</p>
                            <p className="text-gray-500 text-xs font-mono">+15 Años de Experiencia Previa</p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* VALORES */}
            <Section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                            Código <span className="text-primary">Operativo</span>
                        </h2>
                        <p className="text-gray-500 max-w-md text-right md:text-left">Los principios innegociables que rigen nuestra operación diaria en el Cauca.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Handshake size={32} />,
                                title: "Transparencia",
                                desc: "Sin letra chica. Precios claros. Asesoría que prioriza tu ahorro, no nuestra venta."
                            },
                            {
                                icon: <BadgeCheck size={32} />,
                                title: "Certificación",
                                desc: "Cero tolerancia con materiales de baja calidad. Solo distribuimos marcas que cumplen RETIE."
                            },
                            {
                                icon: <Target size={32} />,
                                title: "Impacto Regional",
                                desc: "Invertimos en el Cauca. Generamos empleo formal y potenciamos el desarrollo local."
                            }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                                    {val.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* MISIÓN / VISIÓN */}
            <Section className="py-24 bg-secondary border-y border-white/5">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span> Misión
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Proveer infraestructura eléctrica segura y eficiente, actuando como el departamento de ingeniería externo para nuestros clientes en Popayán.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span> Visión
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Digitalizar y profesionalizar el suministro eléctrico en el Suroccidente colombiano, siendo referentes de innovación y sostenibilidad.
                        </p>
                    </div>
                </div>
            </Section>

            {/* POR QUÉ ELEGIRNOS */}
            <Section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                        Infraestructura <span className="text-primary">Sólida</span>
                    </h2>
                </div>

                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <MapPin size={32} />,
                            title: "Hub Logístico",
                            desc: "Ubicados estratégicamente en Barrio Modelo para despachos rápidos."
                        },
                        {
                            icon: <Trophy size={32} />,
                            title: "Track Record",
                            desc: "Más de 1000 proyectos energizados exitosamente sin incidentes."
                        },
                        {
                            icon: <Brain size={32} />,
                            title: "Ingeniería In-House",
                            desc: "No somos vendedores, somos técnicos especialistas en energía."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors bg-secondary/30">
                            <div className="text-primary mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="font-heading text-lg font-bold text-white mb-2 text-center">{item.title}</h3>
                            <p className="text-gray-500 text-center text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-secondary border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,211,77,0.05),transparent_50%)]" />

                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
                            Ejecutemos tu Proyecto
                        </h2>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA 💡")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-primary text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors relative z-10"
                        >
                            Contactar Ahora <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </Section>
        </PageTransition>
    );
};

export default About;
