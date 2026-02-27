"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "@/components/common/AnimatedNumber";

const stats = [
  {
    number: 2002,
    suffix: "",
    label: "설립년도",
    description: "끊임없는 성장의 역사",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: 2902,
    suffix: "명",
    label: "사원수",
    description: "전문 헬스케어 인력",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: 5,
    suffix: "조원+",
    label: "매출액",
    description: "그룹 연결 기준",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    number: 61,
    suffix: "개",
    label: "물류센터",
    description: "전국 물류 네트워크",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1B365D" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center lg:border-r last:border-r-0 border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-text-main font-medium text-base mt-3">
                {stat.label}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-12">
          * 2025년말 그룹 연결기준
        </p>
      </div>
    </section>
  );
}
