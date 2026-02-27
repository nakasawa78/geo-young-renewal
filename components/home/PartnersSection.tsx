"use client";

import { motion } from "framer-motion";

const partnersRow1 = [
  "한미약품", "유한양행", "대웅제약", "종근당", "일동제약",
  "녹십자", "동아에스티", "JW중외제약", "한독", "보령제약",
  "광동제약", "삼진제약", "환인제약", "동화약품", "일양약품",
];

const partnersRow2 = [
  "SK케미칼", "CJ헬스케어", "HK이노엔", "셀트리온", "삼성바이오에피스",
  "대원제약", "경동제약", "제일약품", "안국약품", "비씨월드제약",
  "신풍제약", "태극제약", "조아제약", "아주약품", "한화제약",
];

export default function PartnersSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            PARTNERS
          </p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
            지오영 파트너사
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            국내외 주요 제약사와 함께합니다
          </p>
        </motion.div>
      </div>

      {/* Scrolling Row 1 - Left */}
      <div className="relative mb-3">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral to-transparent z-10" />
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...partnersRow1, ...partnersRow1].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 mx-1.5 bg-white rounded shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span className="text-text-main text-sm font-medium whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Row 2 - Right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral to-transparent z-10" />
        <div className="flex animate-scroll-right whitespace-nowrap">
          {[...partnersRow2, ...partnersRow2].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 mx-1.5 bg-white rounded shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <span className="text-text-main text-sm font-medium whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
