import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Header, Footer } from './components/Layout';
import { MouseFollower, WhatsAppButton } from './components/UI';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Warranty from './pages/Warranty';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPost';
import USP from './pages/USP';
import TargetAudience from './pages/TargetAudience';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/garantia" element={<Warranty />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/valor" element={<USP />} />
        <Route path="/clientes" element={<TargetAudience />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-200 bg-secondary selection:bg-primary selection:text-secondary cursor-default">
        <ScrollToTop />
        <MouseFollower />
        <Header />

        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
