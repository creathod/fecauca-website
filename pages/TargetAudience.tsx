import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldAlert, ArrowRight } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';

const PERSONAS = [
    {
        id: "ELEC",
        name: "Técnico / Electricista",
        quote: "Necesito que el material no me haga quedar mal.",
        pain: "Retrasos, Garantías lentas",
        gain: "Respuesta inmediata, Stock real",
        icon: "⚡"
    },
    {
        id: "ING",
        name: "Ingeniero Residente",
        quote: "Requiero certificación y cumplimiento normativo.",
        pain: "Material no conforme, RETIE",
        gain: "Certificados al día, Fichas técnicas",
        icon: "🏗️"
    },
    {
        id: "PROC",
        name: "Compras / Contratista",
        quote: "Busco optimizar el presupuesto sin sacrificar calidad.",
        pain: "Sobrecostos, Tiempos de entrega",
        gain: "Pricing por volumen, Logística",
        icon: "📋"
    },
    {
        id: "HOME",
        name: "Usuario Final",
        quote: "No sé mucho de electricidad, necesito guía.",
        pain: "Riesgo eléctrico, Asesoría nula",
        gain: "Explicación simple, Seguridad",
        icon: "🏠"
    }
];

const TargetAudience = () => {
  return (
    <PageTransition>
        <div className="bg-background min-h-screen pt-20">
             <div className="container mx-auto px-4 py-20 text-center">
                 <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                     PERFILES DE <span className="text-primary">USUARIO</span>
                 </h1>
                 <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                     Soluciones calibradas para cada actor del ecosistema eléctrico.
                 </p>
             </div>

             <Section className="container mx-auto px-4 pb-24">
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                     {PERSONAS.map((p, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-secondary rounded-xl p-6 border border-white/5 hover:border-primary/50 transition-all flex flex-col h-full"
                         >
                             <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                 <span className="font-mono text-xs text-gray-500">ID: {p.id}</span>
                                 <span className="text-2xl">{p.icon}</span>
                             </div>
                             
                             <h3 className="font-heading text-xl font-bold text-white mb-2">{p.name}</h3>
                             <p className="text-gray-400 text-sm italic mb-6">"{p.quote}"</p>
                             
                             <div className="mt-auto space-y-3">
                                 <div className="bg-red-500/10 p-3 rounded-lg border-l-2 border-red-500">
                                     <div className="text-[10px] text-red-400 uppercase font-bold mb-1 flex items-center gap-1"><ShieldAlert size={10}/> Pain Point</div>
                                     <div className="text-sm text-gray-300">{p.pain}</div>
                                 </div>
                                 <div className="bg-green-500/10 p-3 rounded-lg border-l-2 border-green-500">
                                     <div className="text-[10px] text-green-400 uppercase font-bold mb-1 flex items-center gap-1"><Zap size={10}/> Solución</div>
                                     <div className="text-sm text-gray-300">{p.gain}</div>
                                 </div>
                             </div>
                         </motion.div>
                     ))}
                 </div>
             </Section>

             <Section className="py-24 bg-secondary border-t border-white/5 text-center">
                 <div className="container mx-auto px-4">
                     <h2 className="font-heading text-3xl font-bold text-white mb-8">¿Te identificas?</h2>
                     <a 
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola FECAUCA 💡")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary border border-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-black transition-colors uppercase tracking-widest text-sm"
                     >
                         Iniciar Conversación <ArrowRight size={16} />
                     </a>
                 </div>
             </Section>
        </div>
    </PageTransition>
  );
};

export default TargetAudience;