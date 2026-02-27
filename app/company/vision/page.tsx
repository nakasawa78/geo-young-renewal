"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

const values = [
  {
    title: "MISSION",
    heading: "건강한 내일을 위한 혁신",
    description:
      "의약품의 안전하고 효율적인 유통을 통해 국민 건강 증진에 기여하고, 헬스케어 산업의 발전을 선도합니다.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "VISION",
    heading: "국내 No.1 헬스케어 플랫폼",
    description:
      "종합 헬스케어 플랫폼으로서 의약품유통, 물류, IT, GPO 등 전 밸류체인을 아우르는 국내 최대 헬스케어 그룹으로 성장합니다.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "CORE VALUE",
    heading: "신뢰 · 혁신 · 상생",
    description:
      "고객과의 신뢰를 바탕으로 끊임없이 혁신하며, 파트너사와 함께 성장하는 상생의 가치를 추구합니다.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        title="비전"
        subtitle="지오영 그룹이 꿈꾸는 미래"
        breadcrumb={[
          { name: "그룹소개", href: "/company/vision" },
          { name: "비전" },
        ]}
      />

      {/* Vision Statement */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-xs tracking-[0.3em] uppercase mb-6"
          >
            OUR VISION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-text-main leading-tight max-w-4xl mx-auto"
          >
            건강한 내일을 만들어가는
            <br />
            <span className="text-primary">대한민국 대표 헬스케어 그룹</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
          >
            지오영 그룹은 2002년 설립 이래, 국민 건강 증진이라는 사명 아래
            끊임없는 혁신과 도전을 이어왔습니다. 헬스케어 전 밸류체인을
            아우르는 종합 플랫폼으로서 대한민국 의료 산업의 미래를 열어갑니다.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Value Cards */}
      <section className="py-20 lg:py-28 bg-neutral">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 lg:p-10 rounded-lg"
              >
                <div className="mb-6">{item.icon}</div>
                <p className="text-accent text-xs tracking-widest mb-3">
                  {item.title}
                </p>
                <h3 className="text-xl lg:text-2xl font-display font-bold text-text-main mb-4">
                  {item.heading}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to History */}
      <section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 mb-4">
              20년 이상의 역사와 경험을 확인해보세요.
            </p>
            <a
              href="/company/history"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              연혁 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
