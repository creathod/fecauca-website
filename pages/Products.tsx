import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Filter, X, Search, Zap, Check, Star, ChevronRight, ShoppingBag,
    ShieldCheck, Lightbulb, Plug, Hammer, Sun, Award, ArrowRight
} from 'lucide-react';
import { PageTransition, Section, Button } from '../components/UI';
import { WHATSAPP_NUMBER } from '../constants';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

// --- MOCK DATA ---
const CATEGORIES = [
    { id: 'all', name: 'Todo el Catálogo', icon: <ShoppingBag size={18} /> },
    { id: 'cables', name: 'Cables y Alambres', icon: <Plug size={18} /> },
    { id: 'iluminacion', name: 'Iluminación LED', icon: <Lightbulb size={18} /> },
    { id: 'proteccion', name: 'Breakers y Tableros', icon: <ShieldCheck size={18} /> },
    { id: 'herramientas', name: 'Herramientas', icon: <Hammer size={18} /> },
    { id: 'solar', name: 'Energía Solar', icon: <Sun size={18} /> },
];

const BRANDS = ["Schneider Electric", "Procables", "Centelsa", "Ilumax", "Truper", "3M", "Legrand", "Lumek"];

const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Cable THHN/THWN-2 Calibre 12 AWG",
        brand: "Procables",
        category: "cables",
        cta: "Consultar Bobina",
        icon: <Plug size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "RETIE",
        desc: "Conductor de cobre suave, aislamiento en PVC. Ideal para instalaciones residenciales y comerciales.",
        features: ["Certificado RETIE", "90°C en ambiente seco", "Resistente a la humedad"]
    },
    {
        id: 2,
        name: "Breaker Enchufable 1P 20A",
        brand: "Schneider Electric",
        category: "proteccion",
        cta: "Verificar Stock",
        icon: <Zap size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "Original",
        desc: "Interruptor termomagnético tipo enchufable. Protección contra sobrecargas y cortocircuitos.",
        features: ["Curva C", "10kA de ruptura", "Garantía de fábrica"]
    },
    {
        id: 3,
        name: "Panel LED Incrustar 18W Redondo",
        brand: "Ilumax",
        category: "iluminacion",
        cta: "Ver Iluminación",
        icon: <Lightbulb size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "Ahorro 80%",
        desc: "Panel LED ultra delgado luz blanca 6500K. Perfecto para oficinas y hogares.",
        features: ["25.000 horas de vida", "Multivoltaje", "Garantía 2 años"]
    },
    {
        id: 4,
        name: "Alicate Electricista 8\" Aislado",
        brand: "Truper",
        category: "herramientas",
        cta: "Equipar Caja",
        icon: <Hammer size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "1000V",
        desc: "Alicate profesional con aislamiento a 1000V. Acero al cromo vanadio.",
        features: ["Mango ergonómico", "Corte de alta precisión", "Norma IEC 60900"]
    },
    {
        id: 5,
        name: "Cinta Aislante Super 33+",
        brand: "3M",
        category: "cables",
        cta: "Añadir al Kit",
        icon: <ShieldCheck size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "Premium",
        desc: "Cinta de vinilo de calidad premium. Resistente a la abrasión, humedad y rayos UV.",
        features: ["Autoextinguible", "Adhesión superior", "Uso profesional"]
    },
    {
        id: 6,
        name: "Reflector LED 50W Exterior",
        brand: "Ilumax",
        category: "iluminacion",
        cta: "Iluminar Exterior",
        icon: <Sun size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "IP65",
        desc: "Reflector de alta potencia para exteriores. Protección IP65 contra lluvia y polvo.",
        features: ["Chasis en aluminio", "Vidrio templado", "Alta eficiencia"]
    },
    {
        id: 7,
        name: "Tablero de Circuitos 12 Puestos",
        brand: "Legrand",
        category: "proteccion",
        cta: "Configurar Tablero",
        icon: <Award size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "RETIE",
        desc: "Caja de distribución para empotrar. Diseño estético y seguro.",
        features: ["Barraje a tierra incluido", "Puerta metálica", "Pintura electrostática"]
    },
    {
        id: 8,
        name: "Kit Solar Básico 500W",
        brand: "Lumek",
        category: "solar",
        cta: "Iniciar Solar",
        icon: <Sun size={48} className="text-gray-700 group-hover:scale-110 transition-transform duration-500" />,
        badge: "Eco",
        desc: "Kit de iniciación solar. Incluye panel, controlador y batería.",
        features: ["Energía limpia", "Fácil instalación", "Ideal fincas"]
    }
];

// --- COMPONENTS ---

const FilterSidebar = ({ selectedCategory, setSelectedCategory, selectedBrand, setSelectedBrand, isOpen, onClose }: any) => {
    return (
        <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-secondary border-r border-white/10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:block lg:h-auto lg:z-0 overflow-y-auto`}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6 lg:hidden">
                    <h2 className="font-heading font-bold text-white text-xl">Filtros</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Categorías</h3>
                    <ul className="space-y-2">
                        {CATEGORIES.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${selectedCategory === cat.id ? 'bg-primary text-secondary font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    {cat.icon}
                                    <span className="text-sm">{cat.name}</span>
                                    {selectedCategory === cat.id && <ChevronRight size={14} className="ml-auto" />}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Brands */}
                <div>
                    <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Marcas</h3>
                    <div className="flex flex-wrap gap-2">
                        {BRANDS.map((brand) => (
                            <button
                                key={brand}
                                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${selectedBrand === brand ? 'bg-white text-secondary border-white font-bold' : 'bg-transparent text-gray-500 border-gray-700 hover:border-gray-500 hover:text-gray-300'}`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

const ProductCard = ({ product, onClick }: any) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-surface border border-white/5 rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer flex flex-col h-full"
        onClick={() => onClick(product)}
    >
        {/* Image Placeholder */}
        <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center">
            <div className="absolute top-3 left-3 z-10">
                <span className="bg-primary text-secondary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                </span>
            </div>
            {product.icon}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-5 flex flex-col flex-grow">
            <div className="mb-2">
                <span className="text-xs text-primary font-bold uppercase tracking-wider">{product.brand}</span>
            </div>
            <h3 className="text-white font-heading font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                {product.name}
            </h3>
            <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
                {product.desc}
            </p>

            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:text-white transition-colors">
                    {product.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </div>
    </motion.div>
);

const ProductModal = ({ product, onClose }: any) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-secondary border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors z-20">
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image Side */}
                    <div className="bg-white/5 h-64 md:h-auto flex items-center justify-center p-8 relative">
                        {React.cloneElement(product.icon, { size: 100, className: "text-gray-700" })}
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase">
                                {product.badge}
                            </span>
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="p-8 md:p-12">
                        <div className="mb-6">
                            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">{product.brand}</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                {product.name}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {product.desc}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                <Check size={18} className="text-primary" /> Características
                            </h4>
                            <ul className="space-y-2">
                                {product.features.map((feat: string, i: number) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <Button
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola FECAUCA, me interesa cotizar: ${product.name} (${product.brand})`)}`}
                                variant="primary"
                                size="lg"
                                className="w-full justify-center text-lg font-bold shadow-lg shadow-primary/20"
                                icon={<Zap size={20} />}
                            >
                                Cotizar por WhatsApp
                            </Button>
                            <p className="text-center text-xs text-gray-500">
                                Respuesta inmediata. Envíos a todo Popayán y Cauca.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    // Filter Logic
    const filteredProducts = MOCK_PRODUCTS.filter(product => {
        const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchBrand = !selectedBrand || product.brand === selectedBrand;
        return matchCategory && matchBrand;
    });

    const breadcrumbs = [
        { name: "Inicio", url: "/" },
        { name: "Catálogo", url: "/productos" }
    ];

    return (
        <PageTransition>
            <SEO
                title="Catálogo Eléctrico Popayán | Cables, LED, Breakers"
                description="Catálogo de materiales eléctricos certificados en Popayán. Encuentre cables, iluminación, tableros y herramientas. Cotice en línea."
                keywords={["catalogo electrico popayan", "precios materiales electricos", "tienda electrica online"]}
            />

            <div className="bg-background min-h-screen pt-20 pb-20">
                {/* Header */}
                <div className="container mx-auto px-4 mb-8">
                    <Breadcrumbs items={breadcrumbs} />
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-6 mb-8 border-b border-white/10 pb-8">
                        <div>
                            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Catálogo <span className="text-primary">Certificado</span>
                            </h1>
                            <p className="text-gray-400 max-w-xl">
                                Seleccione los productos que necesita y cotice directamente con nuestros asesores técnicos.
                            </p>
                        </div>
                        <button
                            className="lg:hidden flex items-center gap-2 bg-surface text-white px-4 py-2 rounded-lg border border-white/10"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <Filter size={18} /> Filtros
                        </button>
                    </div>
                </div>

                <div className="container mx-auto px-4 flex gap-8">
                    {/* Sidebar */}
                    <FilterSidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedBrand={selectedBrand}
                        setSelectedBrand={setSelectedBrand}
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />

                    {/* Overlay for mobile sidebar */}
                    {isSidebarOpen && (
                        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
                    )}

                    {/* Grid */}
                    <div className="flex-1">
                        {filteredProducts.length > 0 ? (
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                <AnimatePresence>
                                    {filteredProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onClick={setSelectedProduct}
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="text-center py-20 bg-surface rounded-3xl border border-white/5 border-dashed">
                                <Search size={48} className="text-gray-600 mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xl mb-2">No se encontraron productos</h3>
                                <p className="text-gray-500">Intente ajustar los filtros de búsqueda.</p>
                                <button
                                    onClick={() => { setSelectedCategory('all'); setSelectedBrand(null); }}
                                    className="mt-4 text-primary hover:underline"
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </AnimatePresence>
        </PageTransition>
    );
};

export default Products;
