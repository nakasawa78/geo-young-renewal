"use client";

import Image from "next/image";
import BusinessPageLayout from "@/components/common/BusinessPageLayout";

export default function PLPage() {
  return (
    <BusinessPageLayout title="3PL / 4PL & CSMO" subtitle="전문 의약품 물류 솔루션">
      <div className="aspect-[16/7] relative rounded-lg mb-12 overflow-hidden">
        <Image src="/img/business02.jpg" alt="3PL / 4PL & CSMO" fill className="object-cover" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-display font-bold text-text-main mb-6">
          맞춤형 물류 & 영업 대행 서비스
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          지오영은 의약품 전문 물류(3PL/4PL) 서비스와 CSMO(Contract Sales &
          Marketing Organization) 서비스를 제공합니다. 제약사의 물류 비용
          절감과 영업 효율화를 동시에 달성할 수 있는 토탈 솔루션을
          제공합니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          GMP/GDP 기준을 충족하는 전문 물류센터에서 입고, 보관, 피킹, 배송까지
          의약품 물류 전 과정을 관리하며, 고객사의 니즈에 맞춘 맞춤형 물류
          설계를 진행합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "3PL (Third-Party Logistics)",
            desc: "의약품 입고·보관·출고·배송 전 과정 위탁 물류 서비스",
          },
          {
            title: "4PL (Fourth-Party Logistics)",
            desc: "물류 전략 수립부터 운영까지 통합 물류 컨설팅",
          },
          {
            title: "CSMO",
            desc: "제약사 대상 영업·마케팅 대행 및 컨설팅 서비스",
          },
          {
            title: "콜드체인 물류",
            desc: "온도 민감 의약품의 안전한 보관 및 배송 체계",
          },
        ].map((item, idx) => (
          <div key={idx} className="border border-gray-100 rounded-lg p-6 hover:border-primary/30 transition-colors">
            <h4 className="text-lg font-bold text-text-main mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </BusinessPageLayout>
  );
}
