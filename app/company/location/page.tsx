"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

export default function LocationPage() {
  return (
    <>
      <PageHero
        title="찾아오시는 길"
        subtitle="지오영 그룹 본사 위치 안내"
        breadcrumb={[
          { name: "그룹소개", href: "/company/vision" },
          { name: "찾아오시는 길" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Map Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="aspect-[16/10] bg-neutral rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary mx-auto mb-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-gray-400 text-sm">지도 영역</p>
                  <p className="text-gray-300 text-xs mt-1">Google Maps / Kakao Map 연동 예정</p>
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-display font-bold text-text-main mb-8">
                본사
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">ADDRESS</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    서울특별시 서대문구 성산로 321
                    <br />
                    (연희동 421-1)
                  </p>
                </div>

                <div>
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">TEL</p>
                  <p className="text-gray-600 text-sm">02-2635-0250</p>
                </div>

                <div>
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">FAX</p>
                  <p className="text-gray-600 text-sm">02-3141-6492</p>
                </div>

                <div>
                  <p className="text-accent text-xs tracking-widest uppercase mb-2">TRANSIT</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5">2</span>
                      <p className="text-gray-600 text-sm">홍대입구역 도보 이용</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-[#73C7A6] rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5">경</span>
                      <p className="text-gray-600 text-sm">가좌역 (경의중앙선) 도보 이용</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
