import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, FileText, Settings, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import { PageTransition, Section, Button } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const Warranty = () => {
    const breadcrumbs = [
        { name: "Inicio", url: "/" },
        { name: "Garantía", url: "/garantia" }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <SEO
                title="Políticas de Garantía | FECAUCA Popayán"
                description="Conozca nuestras políticas de garantía. Respaldo técnico bajo normas del fabricante. Revisión técnica especializada para equipos eléctricos."
                keywords={["garantia electrica", "retie", "soporte tecnico FECAUCA"]}
            />

            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={breadcrumbs} />
                </div>

                {/* HERO */}
                <div className="container mx-auto px-4 py-16 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-3xl -z-10 rounded-full" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ShieldCheck size={64} className="text-primary mx-auto mb-6" />
                        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Respaldo y <span className="text-primary">Confianza</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
                            En FECAUCA vendemos calidad certificada. Sin embargo, entendemos que los fallos ocurren.
                            Aquí le explicamos cómo protegemos su inversión con transparencia.
                        </p>
                    </motion.div>
                </div>

                {/* POLICY CARDS */}
                <Section className="py-12 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Card 1: Manufacturer Norms */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-surface border border-white/10 p-8 rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileText size={100} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black text-sm font-bold">1</span>
                                Normativa del Fabricante
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                FECAUCA actúa como distribuidor autorizado. Por lo tanto, <strong>nos regimos estrictamente por las políticas de garantía de cada marca</strong> (Centelsa, Legrand, Schneider, etc.).
                            </p>
                            <div className="bg-background/50 p-4 rounded-xl border-l-4 border-primary">
                                <p className="text-sm text-gray-300">
                                    "No inventamos las reglas, aplicamos los estándares de calidad internacional de nuestros proveedores."
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2: Technical Review */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-surface border border-white/10 p-8 rounded-3xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Settings size={100} />
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black text-sm font-bold">2</span>
                                Revisión Técnica
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Para equipos complejos (Transformadores, Variadores, Breakers Industriales), <strong>el cambio NO es inmediato</strong>.
                            </p>
                            <div className="bg-red-500/10 p-4 rounded-xl border-l-4 border-red-500">
                                <p className="text-sm text-red-200 flex items-start gap-2">
                                    <AlertTriangle size={16} className="shrink-0 mt-1" />
                                    Estos equipos deben ser enviados a laboratorio para descartar fallas por mala instalación, sobrecargas o manipulación indebida.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Section>

                {/* PROCESS STEPS */}
                <Section className="py-16 bg-secondary border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="font-heading text-4xl font-bold text-white mb-8 text-center">
                            Proceso de <span className="text-primary">Reclamación</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />

                            {[
                                {
                                    title: "1. Reporte",
                                    desc: "Contáctenos por WhatsApp o visite la tienda con su factura y el producto.",
                                    icon: <FileText />
                                },
                                {
                                    title: "2. Diagnóstico",
                                    desc: "Determinamos la viabilidad de la garantía (defectos visibles simples) o si requiere internación técnica.",
                                    icon: <Settings />
                                },
                                {
                                    title: "3. Resolución",
                                    desc: "Si procede por garantía, le entregamos un producto nuevo o reparado según dictamen.",
                                    icon: <ShieldCheck />
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="bg-background p-8 rounded-2xl border border-white/10 text-center"
                                >
                                    <div className="w-16 h-16 bg-surface rounded-full border-4 border-secondary mx-auto flex items-center justify-center text-primary mb-6 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <h3 className="font-bold text-white text-xl mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* FAQ / REALITY CHECK */}
                <Section className="py-16 container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-heading text-4xl font-bold text-white mb-8 flex items-center gap-3">
                            <HelpCircle className="text-primary" /> Preguntas Frecuentes
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <h4 className="font-bold text-white mb-2">¿Por qué no me cambian el transformador de inmediato?</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Un transformador es un equipo costoso y delicado. Si falló, pudo ser por un rayo, una sobrecarga en su red o una mala conexión.
                                    El fabricante exige un análisis forense para determinar la causa. Si fue defecto de fábrica, se cambia. Si fue externo, la garantía no aplica.
                                </p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl border border-white/5">
                                <h4 className="font-bold text-white mb-2">¿Qué productos tienen trámite simplificado?</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Generalmente productos de iluminación (bombillos, paneles) o accesorios simples que presenten fallas evidentes de manufactura y estén dentro del periodo de prueba inicial, siempre sujeto a inspección visual en mostrador.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA, tengo una consulta sobre una garantía")}`}
                                variant="outline"
                                icon={<ShieldAlert size={18} />}
                            >
                                Reportar Caso de Garantía
                            </Button>
                        </div>
                    </div>
                </Section>
            </div>
        </PageTransition>
    );
};

export default Warranty;
