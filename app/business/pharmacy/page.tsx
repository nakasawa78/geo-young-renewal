"use client";

import Image from "next/image";
import BusinessPageLayout from "@/components/common/BusinessPageLayout";

export default function PharmacyPage() {
  return (
    <BusinessPageLayout title="의약품유통" subtitle="국내 최대 의약품 도매유통 네트워크">
      {/* Hero Image */}
      <div className="aspect-[16/7] relative rounded-lg mb-12 overflow-hidden">
        <Image src="/img/business01.jpg" alt="의약품유통" fill className="object-cover" />
      </div>

      {/* Description */}
      <div className="mb-12">
        <h3 className="text-2xl font-display font-bold text-text-main mb-6">
          대한민국 No.1 의약품 유통
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          지오영은 국내 최대 규모의 의약품 도매유통 기업으로, 전국 30여 개
          물류센터와 첨단 물류 시스템을 통해 의약품을 안전하고 신속하게
          공급하고 있습니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          전문의약품, 일반의약품, 의료기기 등 다양한 헬스케어 제품의 유통을
          담당하며, 제약사와 의료기관을 잇는 핵심 파트너로서 대한민국 의료
          공급망의 중추적 역할을 수행하고 있습니다.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "전국 물류 네트워크",
            desc: "30여 개 물류센터를 통한 전국 당일/익일 배송 체계",
            icon: "🏭",
          },
          {
            title: "첨단 물류 시스템",
            desc: "GDP 기준 준수, 콜드체인 시스템 등 품질 관리 체계",
            icon: "🔬",
          },
          {
            title: "파트너 네트워크",
            desc: "국내외 주요 제약사와의 긴밀한 파트너십",
            icon: "🤝",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-neutral rounded-lg p-6">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold text-text-main mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </BusinessPageLayout>
  );
}
