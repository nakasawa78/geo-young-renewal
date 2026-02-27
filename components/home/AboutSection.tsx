"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left Content (60%) */}
          <div className="lg:col-span-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent text-xs tracking-[0.3em] uppercase mb-4"
            >
              ABOUT GEOYOUNG
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-text-main leading-tight"
            >
              헬스케어 전 밸류체인을
              <br />
              포괄하는 핵심 서비스
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-base lg:text-lg leading-relaxed mt-8 max-w-lg"
            >
              지오영 그룹은 의약품유통을 중심으로 3PL/4PL 물류, 병원 GPO,
              방사성의약품, 헬스케어 IT 등 헬스케어 전 밸류체인을 아우르는
              국내 최대규모의 종합 헬스케어 플랫폼입니다. 20년 이상의 역사와
              경험을 바탕으로 대한민국 의료 산업의 발전에 기여하고 있습니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <Link
                href="/company/vision"
                className="inline-flex items-center gap-3 text-primary font-medium text-sm group"
              >
                더 알아보기
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right Image (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative">
              {/* Decorative green box behind image */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-full h-full bg-accent/20 rounded-lg" />
              {/* Visual graphic placeholder */}
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#e8edf5] to-[#c8d4e6] rounded-lg overflow-hidden shadow-lg">
                {/* Abstract healthcare illustration */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                  {/* Background shapes */}
                  <circle cx="200" cy="220" r="120" fill="#1B365D" opacity="0.08" />
                  <circle cx="300" cy="350" r="80" fill="#C4A265" opacity="0.1" />
                  <circle cx="100" cy="400" r="60" fill="#1B365D" opacity="0.06" />

                  {/* Medical cross */}
                  <g transform="translate(160,160)">
                    <rect x="25" y="0" width="30" height="80" rx="4" fill="#1B365D" opacity="0.15" />
                    <rect x="0" y="25" width="80" height="30" rx="4" fill="#1B365D" opacity="0.15" />
                  </g>

                  {/* Network nodes */}
                  <circle cx="120" cy="150" r="6" fill="#1B365D" opacity="0.3" />
                  <circle cx="280" cy="180" r="6" fill="#C4A265" opacity="0.3" />
                  <circle cx="320" cy="300" r="6" fill="#1B365D" opacity="0.3" />
                  <circle cx="80" cy="320" r="6" fill="#C4A265" opacity="0.3" />
                  <circle cx="200" cy="400" r="6" fill="#1B365D" opacity="0.3" />

                  {/* Connection lines */}
                  <line x1="120" y1="150" x2="280" y2="180" stroke="#1B365D" strokeWidth="1" opacity="0.15" />
                  <line x1="280" y1="180" x2="320" y2="300" stroke="#1B365D" strokeWidth="1" opacity="0.15" />
                  <line x1="80" y1="320" x2="200" y2="400" stroke="#C4A265" strokeWidth="1" opacity="0.15" />
                  <line x1="120" y1="150" x2="80" y2="320" stroke="#C4A265" strokeWidth="1" opacity="0.1" />
                  <line x1="320" y1="300" x2="200" y2="400" stroke="#1B365D" strokeWidth="1" opacity="0.1" />

                  {/* Pill shape */}
                  <g transform="translate(260,80) rotate(30)">
                    <rect x="0" y="0" width="60" height="24" rx="12" fill="#1B365D" opacity="0.12" />
                    <line x1="30" y1="0" x2="30" y2="24" stroke="#0A1628" strokeWidth="1" opacity="0.1" />
                  </g>

                  {/* Heart rate line */}
                  <polyline points="40,250 80,250 100,230 120,270 140,240 160,260 180,250 360,250" fill="none" stroke="#1B365D" strokeWidth="2" opacity="0.15" />

                  {/* Building icon */}
                  <g transform="translate(140,350)" opacity="0.12">
                    <rect x="0" y="20" width="40" height="50" fill="#1B365D" />
                    <rect x="50" y="0" width="50" height="70" fill="#0A1628" />
                    <rect x="8" y="30" width="8" height="8" fill="white" />
                    <rect x="22" y="30" width="8" height="8" fill="white" />
                    <rect x="8" y="44" width="8" height="8" fill="white" />
                    <rect x="22" y="44" width="8" height="8" fill="white" />
                    <rect x="60" y="10" width="8" height="8" fill="white" />
                    <rect x="80" y="10" width="8" height="8" fill="white" />
                    <rect x="60" y="28" width="8" height="8" fill="white" />
                    <rect x="80" y="28" width="8" height="8" fill="white" />
                    <rect x="60" y="46" width="8" height="8" fill="white" />
                    <rect x="80" y="46" width="8" height="8" fill="white" />
                  </g>
                </svg>

                {/* Central icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white/80 shadow-xl flex items-center justify-center backdrop-blur-sm">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.2" />
                      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
