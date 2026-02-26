import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { BlogService, BlogPost } from '../services/BlogService';
import SEO from '../components/SEO';

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    useEffect(() => {
        const loadPosts = async () => {
            const data = await BlogService.getPosts();
            setPosts(data);
            setFilteredPosts(data);
            setLoading(false);
        };
        loadPosts();
    }, []);

    useEffect(() => {
        let result = posts;

        if (searchTerm) {
            result = result.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory !== 'Todos') {
            result = result.filter(post => post.category === selectedCategory);
        }

        setFilteredPosts(result);
    }, [searchTerm, selectedCategory, posts]);

    const categories = ['Todos', ...Array.from(new Set(posts.map(p => p.category)))];

    return (
        <PageTransition>
            <SEO
                title="Blog de Ingeniería Eléctrica | FECAUCA"
                description="Artículos técnicos, tutoriales y consejos sobre instalaciones eléctricas, normativa RETIE y ahorro de energía."
                keywords={["blog electricidad", "tutoriales electricos", "norma retie", "ahorro energia"]}
            />

            <div className="min-h-screen bg-background pt-20">
                {/* HERO */}
                <div className="bg-secondary border-b border-white/5 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <BookOpen size={48} className="text-primary mx-auto mb-4" />
                            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Conocimiento <span className="text-primary">Experto</span>
                            </h1>
                            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                                Guías técnicas, normativa y consejos para potenciar sus proyectos eléctricos.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* SEARCH & FILTER */}
                <div className="container mx-auto px-4 -mt-8 relative z-20">
                    <div className="bg-surface border border-white/10 p-6 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar artículo..."
                                className="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${selectedCategory === cat
                                        ? 'bg-primary text-black'
                                        : 'bg-background text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* POSTS GRID */}
                <Section className="py-16 container mx-auto px-4">
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, i) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider border border-white/10">
                                            {post.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                        </div>

                                        <h2 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all mt-auto"
                                        >
                                            Leer Artículo <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {!loading && filteredPosts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No se encontraron artículos con esa búsqueda.
                        </div>
                    )}
                </Section>
            </div>
        </PageTransition>
    );
};

export default Blog;
