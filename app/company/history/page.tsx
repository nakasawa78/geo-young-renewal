"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

const historyData = [
  {
    year: "2020~현재",
    events: [
      "2024 MBK파트너스 인수 완료",
      "2023 백제약품 지분 인수 (국내 2위 도매유통사)",
      "2021 천안물류센터(Hub 2) 개소 / 듀켐바이오 인수 (방사성의약품 사업 진출)",
      "2020 경동약품 인수, 지오영경동 설립",
    ],
    highlight: true,
  },
  {
    year: "2010~2019",
    events: [
      "2019 블랙스톤 투자 유치 / 남부지오영 설립 / 큐어링크 인수",
      "2018 포시에이트 인수 (병원 IT 사업 확대)",
      "2017 NS스마트 인수 (병원 IT 사업 진출)",
      "2015 차세대 시스템 '지오넷 플러스' 구축",
      "2014 케어캠프 인수 (병원 GPO 사업 진출) / 제주지오영 설립 / 크레소티 인수 (약국 IT)",
      "2013 연희동 신사옥 이전 / 북부물류센터 개소 / 단일법인 매출 1조원 달성",
      "2010 전주약품·대동약품 인수, 호남지오영·대전지오영 설립",
    ],
    highlight: false,
  },
  {
    year: "2002~2009",
    events: [
      "2009 골드만삭스PIA 투자 유치 / 청십자약품 인수, 영남지오영 설립 / 지오영네트웍스 설립",
      "2008 강남물류센터 개소",
      "2007 인천물류센터(Hub 1) 개소 (350억원 투자, 10,000m²)",
      "2006 연합약품 인수, 강원지오영 설립",
      "2005 지오웹(온라인 주문 시스템) 도입",
      "2004 강북/경기 물류센터 개소",
      "2003 경영정보시스템 '지오넷' 구축",
      "2002 지오영 설립 (엑손팜) / 부천물류센터 개소",
    ],
    highlight: false,
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        title="연혁"
        subtitle="20년 이상의 성장 이야기"
        breadcrumb={[
          { name: "그룹소개", href: "/company/vision" },
          { name: "연혁" },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-px" />

            {historyData.map((period, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative mb-16 last:mb-0 pl-12 lg:pl-0 ${
                  idx % 2 === 0
                    ? "lg:pr-[calc(50%+40px)]"
                    : "lg:pl-[calc(50%+40px)]"
                }`}
              >
                {/* Dot on Timeline */}
                <div
                  className={`absolute left-4 lg:left-1/2 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                    period.highlight
                      ? "bg-primary ring-4 ring-primary/20"
                      : "bg-gray-300"
                  }`}
                />

                {/* Year Label */}
                <div
                  className={`text-3xl lg:text-4xl font-display font-bold mb-6 ${
                    period.highlight ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {period.year}
                </div>

                {/* Events */}
                <div className="space-y-3">
                  {period.events.map((event, eIdx) => (
                    <div
                      key={eIdx}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-sm lg:text-base">{event}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
