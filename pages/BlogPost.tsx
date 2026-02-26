import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { PageTransition, Section } from '../components/UI';
import { BlogService, BlogPost } from '../services/BlogService';
import SEO from '../components/SEO';

const BlogPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            if (!id) return;
            const data = await BlogService.getPostById(id);
            if (data) {
                setPost(data);
            } else {
                navigate('/blog'); // Redirect if not found
            }
            setLoading(false);
        };
        loadPost();
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-32 flex justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!post) return null;

    return (
        <PageTransition>
            <SEO
                title={`${post.title} | Blog FECAUCA`}
                description={post.excerpt}
                image={post.image}
            />

            <article className="min-h-screen bg-background pt-24 pb-20">
                {/* HEADER IMAGE */}
                <div className="container mx-auto px-4 mb-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-6 transition-colors">
                        <ArrowLeft size={20} /> Volver al Blog
                    </Link>

                    <div className="relative h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <span className="text-gray-300 text-sm flex items-center gap-2">
                                    <Calendar size={16} /> {post.date}
                                </span>
                            </div>
                            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-gray-400 text-sm">
                                <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
                                <span className="flex items-center gap-2"><Clock size={18} /> 5 min lectura</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 shadow-xl">
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="lead text-xl text-gray-300 mb-8 font-light border-l-4 border-primary pl-6 italic">
                                    {post.excerpt}
                                </p>
                                {/* Simulating Markdown Content - In a real app use react-markdown */}
                                {/* Custom Markdown Renderer */}
                                <div className="text-gray-300 space-y-4 leading-relaxed">
                                    {(() => {
                                        // 1. Pre-process to fix common formatting issues (flattened text)
                                        const cleanContent = post.content
                                            .replace(/\\n/g, '\n') // Fix literal escaped newlines
                                            .replace(/([^\n])###/g, '$1\n\n###') // Ensure headers start on new line
                                            .replace(/([^\n])- /g, '$1\n- ');    // Ensure list items start on new line

                                        // 2. Split by newlines (single or double)
                                        return cleanContent.split(/\n+/).map((block, index) => {
                                            const text = block.trim();
                                            if (!text) return null;

                                            // Handle Headers
                                            if (text.startsWith('### ')) {
                                                return (
                                                    <h3 key={index} className="text-xl font-bold text-white mt-8 mb-4 font-heading">
                                                        {text.replace(/^### /, '')}
                                                    </h3>
                                                );
                                            }

                                            // Handle Lists (Single items)
                                            if (text.startsWith('- ')) {
                                                return (
                                                    <div key={index} className="flex gap-3 ml-4">
                                                        <span className="text-primary font-bold">•</span>
                                                        <span dangerouslySetInnerHTML={{
                                                            __html: text.replace(/^- /, '')
                                                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                                                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>')
                                                        }} />
                                                    </div>
                                                );
                                            }

                                            // Handle Paragraphs
                                            return (
                                                <p key={index} dangerouslySetInnerHTML={{
                                                    __html: text
                                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>')
                                                }} />
                                            );
                                        });
                                    })()}
                                </div>
                            </div>

                            {/* SHARE */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Compartir artículo</span>
                                <div className="flex gap-4">
                                    {/* Native Share (Mobile) */}
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: post.title,
                                                    text: post.excerpt,
                                                    url: window.location.href,
                                                }).catch(console.error);
                                            } else {
                                                // Fallback: Copy to clipboard
                                                navigator.clipboard.writeText(window.location.href);
                                                alert('Enlace copiado al portapapeles');
                                            }
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white hover:bg-primary hover:text-black transition-colors font-bold text-sm"
                                    >
                                        <Share2 size={18} /> Compartir
                                    </button>

                                    {/* Facebook Share */}
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                                        title="Compartir en Facebook"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>

                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${window.location.href}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
                                        title="Compartir en WhatsApp"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </PageTransition>
    );
};

export default BlogPostDetail;
