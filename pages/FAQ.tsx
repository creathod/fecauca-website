import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';

const FAQS = [
    { q: "Logística de entrega", a: "Despachos en Popayán y Cauca. Pedidos >$1M envío gratis. Entregas AM/PM." },
    { q: "Política de Precios", a: "Precios mayoristas disponibles para profesionales registrados. Igualación de cotizaciones." },
    { q: "Métodos de Pago", a: "Efectivo, Transferencias, Tarjetas (Datafono) y Crédito ADDI." },
    { q: "Garantía Técnica", a: "Respaldo directo. Cumplimiento RETIE. Cambios inmediatos por defecto." },
    { q: "Cotizaciones", a: "Válidas por 15 días. Envíanos tu listado por WhatsApp." },
    { q: "Devoluciones", a: "5 días hábiles. Material en estado original. No aplica para cables cortados." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <PageTransition>
        <div className="bg-background min-h-screen pt-20">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                    BASE DE <span className="text-primary">CONOCIMIENTO</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    Datos operativos y protocolos de servicio.
                </p>
            </div>

            <Section className="container mx-auto px-4 max-w-3xl pb-24">
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div 
                            key={i}
                            className="bg-secondary border border-white/5 rounded-xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className={`font-heading font-bold text-lg ${activeIndex === i ? 'text-primary' : 'text-white'}`}>
                                    {faq.q}
                                </span>
                                {activeIndex === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-gray-500" />}
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">¿Duda no resuelta?</p>
                    <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA 💡 Ayuda FAQ")}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary font-bold hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                        <MessageCircle size={18} /> Soporte en Vivo
                    </a>
                </div>
            </Section>
        </div>
    </PageTransition>
  );
};

export default FAQ;