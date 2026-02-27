"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import Link from "next/link";

const sampleNews = [
  { id: 1, category: "보도자료", title: "지오영 그룹, 2024년 매출 5조원 돌파", date: "2024.12.15" },
  { id: 2, category: "보도자료", title: "지오영, AI 기반 물류 자동화 시스템 도입", date: "2024.11.20" },
  { id: 3, category: "보도자료", title: "지오영메디칼, 의료기기 유통 사업 확대", date: "2024.10.08" },
  { id: 4, category: "보도자료", title: "지오영 그룹, ESG 경영 보고서 발간", date: "2024.09.15" },
  { id: 5, category: "보도자료", title: "지오영, 콜드체인 물류센터 신규 오픈", date: "2024.08.22" },
  { id: 6, category: "보도자료", title: "지오영 헬스케어IT, 디지털 전환 가속화", date: "2024.07.10" },
  { id: 7, category: "보도자료", title: "지오영 그룹, 방사성의약품 사업 성과 발표", date: "2024.06.18" },
  { id: 8, category: "보도자료", title: "지오영, 제약사 CSMO 파트너십 확대", date: "2024.05.25" },
];

export default function ReportPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = sampleNews.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="보도자료"
        subtitle="지오영 그룹의 최신 소식"
        breadcrumb={[
          { name: "홍보센터", href: "/promotion/report" },
          { name: "보도자료" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-100">
            <Link
              href="/promotion/report"
              className="pb-4 px-2 text-sm font-medium text-primary border-b-2 border-primary"
            >
              보도자료
            </Link>
            <Link
              href="/promotion/notice"
              className="pb-4 px-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              공지사항
            </Link>
          </div>

          {/* Search */}
          <div className="flex justify-end mb-8">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-gray-100">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral/50 px-4 -mx-4 rounded transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded flex-shrink-0">
                    {item.category}
                  </span>
                  <h3 className="text-sm lg:text-base text-text-main group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{item.date}</span>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-gray-400 text-sm">
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
