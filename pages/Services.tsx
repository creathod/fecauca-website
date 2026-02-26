import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Truck, Users, Zap, Clock, MapPin,
    CheckCircle, ArrowRight, MessageCircle
} from 'lucide-react';
import { PageTransition, Section, Button } from '../components/UI';
import { WHATSAPP_NUMBER, COMPANY_INFO } from '../constants';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const Services = () => {
    const breadcrumbs = [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" }
    ];

    const services = [
        {
            id: 'asesoria',
            icon: <Users size={40} />,
            title: "Asesoría Técnica en Tienda",
            desc: "Evite gastos innecesarios. Nuestros ingenieros le asesoran presencialmente en nuestro almacén para que compre solo lo que realmente necesita, optimizando su presupuesto.",
            features: ["Compras inteligentes", "Ahorro garantizado", "Atención presencial"]
        },
        {
            id: 'logistica',
            icon: <Truck size={40} />,
            title: "Logística y Envíos",
            desc: "Coordinamos la entrega de sus materiales en Popayán y todo el Cauca. Su obra no se detiene, nosotros nos encargamos del transporte.",
            features: ["Envío GRATIS >$1M (Popayán)", "Despachos ágiles", "Cobertura departamental"]
        },
        {
            id: 'garantia',
            icon: <ShieldCheck size={40} />,
            title: "Respaldo y Garantía",
            desc: "Su inversión está segura. Gestionamos las garantías directamente con los fabricantes bajo sus políticas, asegurando que reciba productos 100% funcionales.",
            features: ["Gestión transparente", "Respaldo de fábrica", "Productos originales"]
        }
    ];

    return (
        <PageTransition>
            <SEO
                title="Servicios Eléctricos Popayán | Asesoría, Envíos, Garantía"
                description="En FECAUCA ofrecemos más que materiales: Asesoría técnica gratuita, envíos rápidos en Popayán y garantía inmediata. Cotice con expertos."
                keywords={["asesoria electrica popayan", "envios materiales electricos cauca", "garantia herramientas electricas"]}
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
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Valor Agregado FECAUCA
                        </span>
                        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Más que Materiales,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                                Soluciones Integrales
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-10">
                            Entendemos que su proyecto necesita respaldo, velocidad y conocimiento técnico.
                            Por eso, en FECAUCA no solo despachamos pedidos, <strong className="text-white">aseguramos su éxito.</strong>
                        </p>

                        <Button
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA, necesito asesoría técnica para mi proyecto")}`}
                            variant="primary"
                            size="lg"
                            className="shadow-[0_0_30px_rgba(255,211,0,0.3)]"
                            icon={<Zap size={20} />}
                        >
                            Agendar Asesoría Gratuita
                        </Button>
                    </motion.div>
                </div>

                {/* SERVICE GRID */}
                <Section className="py-16 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-surface border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-colors group h-full flex flex-col"
                            >
                                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                            <CheckCircle size={16} className="text-primary shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* DETAILED SECTIONS */}

                {/* Asesoría */}
                <Section className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                                <Users size={16} /> Ingenieros Expertos
                            </div>
                            <h2 className="font-heading text-4xl font-bold text-white mb-8">
                                ¿Dudas con su instalación? <br />
                                <span className="text-primary">Nosotros le ayudamos.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                A diferencia de otras ferreterías, en FECAUCA le ayudamos a realizar compras inteligentes.
                                Visítenos en nuestro almacén para revisar su listado y evitar gastos en materiales innecesarios.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded text-primary h-fit"><CheckCircle size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Interpretación de Planos</h4>
                                        <p className="text-sm text-gray-500">Le ayudamos a desglosar su listado de materiales.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded text-primary h-fit"><CheckCircle size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Equivalencias y Ahorro</h4>
                                        <p className="text-sm text-gray-500">Sugerimos marcas certificadas que se ajusten a su presupuesto.</p>
                                    </div>
                                </li>
                            </ul>
                            <Button href="https://maps.app.goo.gl/g9B4KW6NtEanoG1a9" variant="outline">
                                Ubicar Almacén
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                            <div className="relative bg-surface border border-white/10 p-8 rounded-3xl">
                                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-6">
                                    <div className="w-12 h-12 bg-gray-700 rounded-full" />
                                    <div>
                                        <p className="text-white font-bold">Equipo FECAUCA</p>
                                        <p className="text-primary text-xs uppercase">Asesores Expertos</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-black/20 p-4 rounded-xl rounded-tl-none text-gray-300 text-sm">
                                        "Hola, para esa carga te recomiendo usar cable calibre 8 AWG en THHN, cumple norma y te sale más económico que el THW."
                                    </div>
                                    <div className="bg-primary/10 p-4 rounded-xl rounded-tr-none text-white text-sm ml-auto w-fit">
                                        "¡Excelente dato! Gracias por la asesoría, envíame ese entonces."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Logística */}
                <Section className="py-24 bg-white/5">
                    <div className="container mx-auto px-4 text-center max-w-4xl">
                        <Truck size={48} className="text-primary mx-auto mb-6" />
                        <h2 className="font-heading text-4xl font-bold text-white mb-8">
                            Logística que mueve su proyecto
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Sabemos que cada minuto en obra cuesta dinero. Por eso nuestra logística está diseñada para ser veloz.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-background p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                                <Clock className="text-primary mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Entregas Ágiles</h4>
                                <p className="text-sm text-gray-500">Coordinamos el despacho inmediato una vez confirmado su pedido.</p>
                            </div>
                            <div className="bg-background p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                                <MapPin className="text-primary mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Cobertura Cauca</h4>
                                <p className="text-sm text-gray-500">Despachos diarios a Santander, Piendamó, El Bordo y más municipios.</p>
                            </div>
                            <div className="bg-background p-6 rounded-2xl border border-white/10 h-full flex flex-col">
                                <ShieldCheck className="text-primary mb-4" size={32} />
                                <h4 className="text-white font-bold mb-2">Transporte Seguro</h4>
                                <p className="text-sm text-gray-500">Material empacado profesionalmente para evitar daños en el trayecto.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA FINAL */}
                <Section className="py-32 text-center">
                    <h2 className="font-heading text-4xl font-bold text-white mb-8">
                        ¿Listo para trabajar con profesionales?
                    </h2>
                    <Button
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        variant="primary"
                        size="lg"
                        className="text-xl px-12 py-6 shadow-[0_0_40px_rgba(255,211,0,0.4)]"
                    >
                        Contactar Ahora
                    </Button>
                </Section>
            </div>
        </PageTransition>
    );
};

export default Services;
