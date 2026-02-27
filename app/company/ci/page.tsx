"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

export default function CIPage() {
  return (
    <>
      <PageHero
        title="CI"
        subtitle="지오영 그룹의 브랜드 아이덴티티"
        breadcrumb={[
          { name: "그룹소개", href: "/company/vision" },
          { name: "CI" },
        ]}
      />

      {/* CI Symbol */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              CORPORATE IDENTITY
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              심볼마크
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="aspect-[2/1] bg-neutral rounded-lg flex items-center justify-center mb-8">
              <span className="font-display font-bold text-5xl lg:text-7xl text-primary tracking-wider">
                GEO-YOUNG
              </span>
            </div>
            <p className="text-gray-500 text-center leading-relaxed">
              지오영 그룹의 CI는 신뢰와 프리미엄을 상징합니다. 네이비·골드 컬러는
              헬스케어 산업의 전문성과 신뢰를 의미하며, 깔끔한 서체는
              격조와 현대적 감각을 표현합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Color System */}
      <section className="py-20 lg:py-28 bg-neutral">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              컬러 시스템
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Primary Navy", color: "#1B365D", textWhite: true },
              { name: "Deep Navy", color: "#0A1628", textWhite: true },
              { name: "Warm Gold", color: "#C4A265", textWhite: true },
              { name: "Neutral", color: "#F5F6F8", textWhite: false },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className="aspect-square rounded-lg mb-3 flex items-end p-4"
                  style={{ backgroundColor: item.color }}
                >
                  <span
                    className={`text-xs font-mono ${
                      item.textWhite ? "text-white/70" : "text-text-main/50"
                    }`}
                  >
                    {item.color}
                  </span>
                </div>
                <p className="text-sm font-medium text-text-main">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-main">
              사용 규정
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="aspect-[3/2] bg-white rounded flex items-center justify-center mb-4 border border-gray-50">
                <span className="font-display font-bold text-3xl text-primary">
                  GEO-YOUNG
                </span>
              </div>
              <p className="text-sm text-gray-500 text-center">밝은 배경 사용</p>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <div className="aspect-[3/2] bg-secondary rounded flex items-center justify-center mb-4">
                <span className="font-display font-bold text-3xl text-white">
                  GEO-YOUNG
                </span>
              </div>
              <p className="text-sm text-white/50 text-center">어두운 배경 사용</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
