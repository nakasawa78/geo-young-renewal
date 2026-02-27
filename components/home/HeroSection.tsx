"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070d16] via-secondary to-[#0A1628]" />

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C4A265" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated floating orbs */}
        <div className="absolute top-[15%] right-[20%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[60%] right-[50%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "3s" }} />

        {/* Geometric decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          {/* Diagonal cross */}
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#C4A265" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#C4A265" strokeWidth="0.5" />
          {/* Concentric circles */}
          <circle cx="50%" cy="50%" r="350" fill="none" stroke="#C4A265" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="250" fill="none" stroke="#C4A265" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="#C4A265" strokeWidth="0.5" />
          {/* Corner accents */}
          <line x1="0" y1="30%" x2="15%" y2="0" stroke="#1B365D" strokeWidth="1" />
          <line x1="85%" y1="100%" x2="100%" y2="70%" stroke="#1B365D" strokeWidth="1" />
        </svg>

        {/* Dotted pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#C4A265" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* DNA Helix inspired shapes */}
        <svg className="absolute right-[5%] top-[10%] w-[200px] h-[80%] opacity-[0.06]" viewBox="0 0 100 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,0 Q80,75 20,150 Q-40,225 20,300 Q80,375 20,450 Q-40,525 20,600" fill="none" stroke="white" strokeWidth="2" />
          <path d="M80,0 Q20,75 80,150 Q140,225 80,300 Q20,375 80,450 Q140,525 80,600" fill="none" stroke="white" strokeWidth="2" />
          <line x1="20" y1="30" x2="80" y2="30" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="90" x2="80" y2="90" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="150" x2="80" y2="150" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="210" x2="80" y2="210" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="270" x2="80" y2="270" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="330" x2="80" y2="330" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="390" x2="80" y2="390" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="450" x2="80" y2="450" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="510" x2="80" y2="510" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="570" x2="80" y2="570" stroke="white" strokeWidth="1" opacity="0.5" />
        </svg>

        {/* Left side accent */}
        <svg className="absolute left-[3%] top-[20%] w-[150px] h-[60%] opacity-[0.06]" viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="0" width="1" height="400" fill="white" />
          <rect x="30" y="50" width="1" height="300" fill="white" />
          <rect x="50" y="100" width="1" height="200" fill="white" />
          <circle cx="10" cy="100" r="4" fill="none" stroke="#C4A265" strokeWidth="1" />
          <circle cx="30" cy="200" r="4" fill="none" stroke="#C4A265" strokeWidth="1" />
          <circle cx="50" cy="300" r="4" fill="none" stroke="#C4A265" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-accent text-sm lg:text-base tracking-[0.3em] uppercase mb-6"
        >
          Your Trusted Healthcare Partner
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight"
        >
          국내 최대규모
          <br />
          종합 헬스케어 플랫폼
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-base lg:text-lg mt-6 max-w-xl mx-auto"
        >
          헬스케어 전 밸류체인을 포괄하는 핵심 서비스
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="/business/pharmacy"
            className="px-8 py-4 bg-primary text-white text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            사업 소개 보기
          </a>
          <a
            href="/company/vision"
            className="px-8 py-4 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
          >
            회사 소개
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-accent animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
