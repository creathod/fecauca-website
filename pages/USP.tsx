
import React from 'react';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Brain, Truck, PackageSearch, CreditCard, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';

const DIFFERENTIALS = [
    {
        id: "01",
        title: "Pricing Dinámico",
        desc: "Algoritmo simple: Si traes una cotización válida de la competencia, la igualamos o mejoramos. Sin fricción.",
        icon: <Target size={24} />
    },
    {
        id: "02",
        title: "Garantía Hot-Swap*",
        desc: "Reemplazo inmediato de material defectuoso. Nosotros respondemos primero. *Aplican términos y condiciones según el producto.",
        icon: <ShieldCheck size={24} />
    },
    {
        id: "03",
        title: "Ingeniería Gratis",
        desc: "Cálculos de carga y diseño básico incluidos con tu compra. Nuestra asesoría técnica se basa en los productos.",
        icon: <Brain size={24} />
    },
    {
        id: "04",
        title: "Logística Inteligente",
        desc: "Envíos gratuitos en Popayán para órdenes >$1M. Entregas coordinadas para no detener tu obra.",
        icon: <Truck size={24} />
    },
    {
        id: "05",
        title: "Sourcing Global",
        desc: "¿Referencia difícil? Activamos nuestra red nacional para gestionarla. Hacemos el máximo esfuerzo por completar tu lista.",
        icon: <PackageSearch size={24} />
    },
    {
        id: "06",
        title: "Flexibilidad Financiera",
        desc: "Aceptamos todos los medios de pago y ofrecemos financiación vía aliados fintech (ADDI).",
        icon: <CreditCard size={24} />
    },
    {
        id: "07",
        title: "Soporte Always-On",
        desc: "Canal de WhatsApp atendido por humanos expertos, no bots. Respuestas técnicas reales.",
        icon: <MessageCircle size={24} />
    }
];

const USP = () => {
  return (
    <PageTransition>
       <div className="bg-background min-h-screen pt-20">
           {/* HERO */}
           <div className="container mx-auto px-4 py-20 text-center">
               <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                   VENTAJA <span className="text-primary">COMPETITIVA</span>
               </h1>
               <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                   7 protocolos operativos diseñados para proteger tu presupuesto y cronograma.
               </p>
           </div>

           {/* GRID */}
           <Section className="container mx-auto px-4 pb-24">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {DIFFERENTIALS.map((item, i) => (
                       <motion.div
                           key={item.id}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           transition={{ delay: i * 0.05 }}
                           className="bg-secondary p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group"
                       >
                           <div className="flex justify-between items-start mb-6">
                               <div className="text-primary/50 font-mono text-sm">{item.id}</div>
                               <div className="text-white group-hover:text-primary transition-colors">{item.icon}</div>
                           </div>
                           <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                           <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                       </motion.div>
                   ))}
               </div>
           </Section>

           {/* WORKFLOW */}
           <Section className="py-24 bg-secondary border-t border-white/5">
               <div className="container mx-auto px-4">
                   <h2 className="font-heading text-3xl font-bold text-white mb-16 text-center">Workflow de Compra</h2>
                   <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
                       {/* Connecting Line */}
                       <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />

                       {[
                           { step: "01", title: "Contacto", desc: "Envía lista por WhatsApp" },
                           { step: "02", title: "Optimización", desc: "Revisión técnica de precios" },
                           { step: "03", title: "Aprobación", desc: "Pago digital o físico" },
                           { step: "04", title: "Despliegue", desc: "Envío a obra inmediato" },
                       ].map((st, i) => (
                           <div key={i} className="bg-background p-6 rounded-xl border border-white/10 w-full md:w-auto flex-1 text-center hover:border-primary transition-colors">
                               <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                                   PHASE {st.step}
                               </div>
                               <h4 className="font-heading text-lg font-bold text-white mb-1">{st.title}</h4>
                               <p className="text-gray-500 text-xs">{st.desc}</p>
                           </div>
                       ))}
                   </div>
               </div>
           </Section>
       </div>
    </PageTransition>
  );
};

export default USP;
