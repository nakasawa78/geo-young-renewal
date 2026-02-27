"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const businesses = [
  {
    number: "01",
    title: "의약품유통",
    titleEn: "Pharmaceutical Distribution",
    description: "국내 최대 의약품 도매유통 네트워크",
    href: "/business/pharmacy",
    gridClass: "md:col-span-2 md:row-span-2",
    bgColor: "from-[#0d1f3d] to-[#0A1628]",
    icon: (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "3PL / 4PL & CSMO",
    titleEn: "Logistics & CSMO",
    description: "전문 의약품 물류 솔루션",
    href: "/business/pl",
    gridClass: "",
    bgColor: "from-[#0f2444] to-[#0A1628]",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15">
        <rect x="1" y="6" width="22" height="12" rx="2" ry="2" />
        <path d="M1 10h22" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "병원 GPO",
    titleEn: "Hospital GPO",
    description: "병원 공동구매 서비스",
    href: "/business/gpo",
    gridClass: "",
    bgColor: "from-[#12294d] to-[#0A1628]",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "방사성의약품",
    titleEn: "Radiopharmaceutical",
    description: "핵의학 진단/치료 의약품",
    href: "/business/radiopharmaceutical",
    gridClass: "",
    bgColor: "from-[#0e2140] to-[#0A1628]",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "헬스케어IT",
    titleEn: "Healthcare IT",
    description: "디지털 헬스케어 플랫폼",
    href: "/business/healthcare",
    gridClass: "",
    bgColor: "from-[#142e55] to-[#0A1628]",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function BusinessSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            BUSINESS AREA
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
            국내 최대규모 종합 헬스케어 플랫폼
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] h-auto md:h-[600px]">
          {businesses.map((biz, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${biz.gridClass} min-h-[200px]`}
            >
              <Link
                href={biz.href}
                className={`group relative block w-full h-full bg-gradient-to-br ${biz.bgColor} overflow-hidden`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`pattern-${idx}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${idx})`} />
                  </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/40 transition-all duration-500" />

                {/* Icon - center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                  {biz.icon}
                </div>

                {/* Number */}
                <span className="absolute top-4 right-4 text-white/10 font-display text-6xl lg:text-7xl font-bold group-hover:text-white/25 transition-colors duration-500">
                  {biz.number}
                </span>

                {/* Accent line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-accent/60 text-xs tracking-widest mb-2 group-hover:text-accent transition-colors duration-300">
                    {biz.titleEn}
                  </p>
                  <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                    {biz.title}
                  </h3>
                  <p className="text-white/50 text-sm group-hover:text-white/80 transition-colors duration-300">
                    {biz.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
