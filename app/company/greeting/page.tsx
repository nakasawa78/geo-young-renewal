"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

export default function GreetingPage() {
  return (
    <>
      <PageHero
        title="회장인사말"
        subtitle="지오영 그룹의 비전과 철학"
        breadcrumb={[
          { name: "그룹소개", href: "/company/vision" },
          { name: "회장인사말" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="text-primary/40 text-sm">회장 사진</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Message */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <blockquote className="border-l-4 border-primary pl-6 mb-10">
                <p className="text-2xl lg:text-3xl font-display font-bold text-text-main leading-snug">
                  &ldquo;건강한 내일을 위해
                  <br />
                  오늘을 혁신합니다&rdquo;
                </p>
              </blockquote>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  안녕하십니까. 지오영 그룹을 찾아주신 여러분께 진심으로
                  감사의 말씀을 드립니다.
                </p>
                <p>
                  지오영 그룹은 2002년 설립 이래, &apos;국민 건강 증진&apos;이라는
                  사명을 가슴에 품고 대한민국 헬스케어 산업의 성장과 함께
                  걸어왔습니다. 의약품 유통을 시작으로 물류, IT, GPO,
                  방사성의약품 등 헬스케어 전 밸류체인으로 사업 영역을
                  확장하며, 명실상부한 국내 최대 종합 헬스케어 플랫폼으로
                  자리매김하였습니다.
                </p>
                <p>
                  2,900여 명의 전문 인력과 전국 61개 물류센터를 기반으로,
                  연매출 5조원을 달성하며 흔들림 없는 성장을 이어가고
                  있습니다. 이 모든 성과는 함께해 주신 파트너사 여러분과
                  고객의 신뢰 덕분입니다.
                </p>
                <p>
                  지오영 그룹은 디지털 전환과 글로벌 확장을 통해 대한민국을
                  넘어 세계 헬스케어 산업의 혁신을 선도하는 기업이 되겠습니다.
                  변함없는 관심과 성원을 부탁드립니다.
                </p>
                <p>감사합니다.</p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-primary font-display font-bold text-lg">
                  지오영 그룹 회장
                </p>
                <p className="text-2xl font-display font-bold text-text-main mt-1">
                  조선혜
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
