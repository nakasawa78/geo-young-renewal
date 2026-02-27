"use client";

import Image from "next/image";
import BusinessPageLayout from "@/components/common/BusinessPageLayout";

export default function HealthcarePage() {
  return (
    <BusinessPageLayout title="헬스케어IT" subtitle="디지털 헬스케어 플랫폼">
      <div className="aspect-[16/7] relative rounded-lg mb-12 overflow-hidden">
        <Image src="/img/business05.jpg" alt="헬스케어IT" fill className="object-cover" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-display font-bold text-text-main mb-6">
          디지털 전환을 선도하는 헬스케어 IT
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          지오영 헬스케어IT는 의약품 유통 데이터와 IT 기술을 결합하여
          제약사, 의료기관, 약국 등 헬스케어 밸류체인의 디지털 전환을
          지원합니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          ERP, WMS, TMS 등 물류 IT 시스템부터 B2B 전자상거래 플랫폼,
          데이터 분석 서비스까지 헬스케어 산업 특화 IT 솔루션을 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "물류 IT 시스템",
            desc: "ERP, WMS, TMS 등 의약품 물류 전문 IT 시스템",
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            ),
          },
          {
            title: "B2B 플랫폼",
            desc: "의약품 전자상거래 및 주문 관리 플랫폼",
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            ),
          },
          {
            title: "데이터 분석",
            desc: "의약품 유통 빅데이터 분석 및 인사이트 제공",
            icon: (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            ),
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-neutral rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold text-text-main mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </BusinessPageLayout>
  );
}
