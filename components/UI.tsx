import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { MessageCircle, Lightbulb } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MSG } from '../constants';

// --- Mouse Follower ---
export const MouseFollower = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[60] hidden md:block mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-20 blur-md rounded-full" />
    </motion.div>
  );
};

// --- WhatsApp Floating Button ---
export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[60px] h-[60px] bg-primary rounded-full shadow-[0_4px_15px_rgba(252,211,77,0.4)] transition-all hover:scale-115 hover:shadow-[0_6px_25px_rgba(252,211,77,0.6)] animate-pulse-glow"
      title="Chatear con FECAUCA"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <MessageCircle size={32} className="text-secondary fill-secondary/10" />
    </motion.a>
  );
};

// --- Page Transition Wrapper ---
export const PageTransition = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

// --- Section Animation Wrapper ---
export const Section = ({ children, className = "", delay = 0 }: { children?: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Triggers when 10% in view
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay }} // Custom cubic bezier for "luxury" feel
      className={className}
    >
      {children}
    </motion.section>
  );
};

// --- Staggered Reveal Wrapper ---
export const Reveal = ({ children, className = "", delay = 0, ...props }: { children: React.ReactNode, className?: string, delay?: number } & React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Button Component ---
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  href,
  to,
  onClick,
  type = 'button'
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-heading font-bold uppercase tracking-widest transition-all duration-300 active:scale-95";

  const variants = {
    primary: "bg-primary text-secondary hover:bg-white hover:text-secondary shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-primary hover:text-secondary shadow-lg hover:shadow-xl",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
    ghost: "bg-transparent text-secondary hover:bg-slate-100"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-sm px-8 py-4"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {icon} {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {icon} {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon} {children}
    </button>
  );
};

// --- Card Component ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className = "", hoverEffect = true }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : {}}
      className={`bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors duration-300 shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
};