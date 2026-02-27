"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import Link from "next/link";

const sampleNotices = [
  { id: 1, category: "공지", title: "2025년 설 연휴 배송 안내", date: "2025.01.15", pinned: true },
  { id: 2, category: "공지", title: "개인정보처리방침 변경 안내", date: "2024.12.20", pinned: true },
  { id: 3, category: "공지", title: "홈페이지 리뉴얼 안내", date: "2024.12.01", pinned: false },
  { id: 4, category: "채용", title: "2025년 상반기 신입/경력 채용 공고", date: "2024.11.25", pinned: false },
  { id: 5, category: "공지", title: "추석 연휴 고객센터 운영 안내", date: "2024.09.10", pinned: false },
  { id: 6, category: "공지", title: "물류센터 시스템 점검 안내 (10/5)", date: "2024.09.01", pinned: false },
  { id: 7, category: "채용", title: "IT 개발팀 경력직 채용 안내", date: "2024.08.15", pinned: false },
  { id: 8, category: "공지", title: "하절기 콜드체인 특별 관리 안내", date: "2024.07.01", pinned: false },
];

export default function NoticePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = sampleNotices.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="공지사항"
        subtitle="지오영 그룹의 주요 공지"
        breadcrumb={[
          { name: "홍보센터", href: "/promotion/report" },
          { name: "공지사항" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-100">
            <Link
              href="/promotion/report"
              className="pb-4 px-2 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              보도자료
            </Link>
            <Link
              href="/promotion/notice"
              className="pb-4 px-2 text-sm font-medium text-primary border-b-2 border-primary"
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
                  {item.pinned && (
                    <span className="text-xs text-white bg-primary px-2 py-1 rounded flex-shrink-0">
                      중요
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ${
                    item.category === "채용"
                      ? "text-orange-600 bg-orange-50"
                      : "text-accent bg-accent/10"
                  }`}>
                    {item.category}
                  </span>
                  <h3 className={`text-sm lg:text-base group-hover:text-primary transition-colors ${
                    item.pinned ? "text-text-main font-medium" : "text-text-main"
                  }`}>
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
