import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server, UserCheck } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const Privacy = () => {
    const breadcrumbs = [
        { name: "Inicio", url: "/" },
        { name: "Privacidad", url: "/privacidad" }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <SEO
                title="Política de Privacidad | FECAUCA"
                description="Conozca cómo FECAUCA protege y gestiona sus datos personales. Transparencia y seguridad en el manejo de su información."
                keywords={["privacidad", "datos personales", "habeas data", "fecauca"]}
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
                        <Lock size={64} className="text-primary mx-auto mb-6" />
                        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Sus Datos están <span className="text-primary">Seguros</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
                            En FECAUCA valoramos su confianza. Esta política explica claramente qué hacemos (y qué no hacemos) con su información.
                        </p>
                    </motion.div>
                </div>

                {/* CONTENT */}
                <Section className="py-12 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div className="bg-surface border border-white/10 p-8 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                                    <Eye size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-4">1. Recolección de Información</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        Solo recolectamos la información estrictamente necesaria para procesar sus pedidos y brindarle un mejor servicio:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                                        <li>Nombre y datos de contacto (Teléfono, Email).</li>
                                        <li>Dirección de envío para logística.</li>
                                        <li>Información de facturación requerida por la DIAN.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-surface border border-white/10 p-8 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                                    <Server size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-4">2. Uso de la Información</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        Sus datos son utilizados exclusivamente para:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                                        <li>Procesar y entregar sus pedidos.</li>
                                        <li>Emitir facturas electrónicas legales.</li>
                                        <li>Contactarlo en caso de novedades con su compra.</li>
                                        <li>Mejorar nuestra oferta de productos (análisis interno).</li>
                                    </ul>
                                    <div className="mt-6 bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
                                        <p className="text-green-400 text-sm font-bold flex items-center gap-2">
                                            <Shield size={16} />
                                            NO vendemos ni compartimos sus datos con terceros para publicidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-surface border border-white/10 p-8 rounded-3xl">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                                    <UserCheck size={24} />
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-4">3. Sus Derechos (Habeas Data)</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        Usted tiene derecho a conocer, actualizar y rectificar sus datos personales. También puede solicitar la supresión de sus datos de nuestras bases de contacto comercial en cualquier momento.
                                    </p>
                                    <p className="text-gray-400">
                                        Para ejercer estos derechos, puede escribirnos a: <span className="text-primary font-bold">info@fecauca.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Section>
            </div>
        </PageTransition>
    );
};

export default Privacy;
