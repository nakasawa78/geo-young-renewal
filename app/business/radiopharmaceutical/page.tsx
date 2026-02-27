"use client";

import Image from "next/image";
import BusinessPageLayout from "@/components/common/BusinessPageLayout";

export default function RadiopharmaceuticalPage() {
  return (
    <BusinessPageLayout title="방사성의약품" subtitle="핵의학 진단/치료 의약품">
      <div className="aspect-[16/7] relative rounded-lg mb-12 overflow-hidden">
        <Image src="/img/business04.jpg" alt="방사성의약품" fill className="object-cover" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-display font-bold text-text-main mb-6">
          방사성의약품 전문 유통
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          방사성의약품은 핵의학 분야에서 질병의 진단과 치료에 사용되는
          특수 의약품입니다. 지오영은 방사성의약품의 제조, 품질관리,
          유통까지 전 과정을 수행하는 국내 선도 기업입니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          PET-CT, SPECT 등 핵의학 검사에 필수적인 방사성의약품을 전국
          의료기관에 안전하고 신속하게 공급하고 있으며, 엄격한 방사선 안전
          관리 체계를 갖추고 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "PET 방사성의약품",
            desc: "양전자방출단층촬영(PET-CT) 검사용 방사성의약품 제조 및 공급",
          },
          {
            title: "SPECT 방사성의약품",
            desc: "단일광자방출전산화단층촬영(SPECT) 검사용 의약품 공급",
          },
          {
            title: "치료용 방사성의약품",
            desc: "갑상선암, 전립선암 등 방사성동위원소 치료제 공급",
          },
          {
            title: "방사선 안전관리",
            desc: "제조부터 운송까지 전 과정의 방사선 안전 관리 체계",
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
