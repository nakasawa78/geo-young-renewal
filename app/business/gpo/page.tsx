"use client";

import Image from "next/image";
import BusinessPageLayout from "@/components/common/BusinessPageLayout";

export default function GPOPage() {
  return (
    <BusinessPageLayout title="병원 GPO" subtitle="병원 공동구매 서비스">
      <div className="aspect-[16/7] relative rounded-lg mb-12 overflow-hidden">
        <Image src="/img/business03.jpg" alt="병원 GPO" fill className="object-cover" />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-display font-bold text-text-main mb-6">
          병원 경영 효율화를 위한 GPO
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          GPO(Group Purchasing Organization)는 복수의 의료기관이 공동으로
          구매하여 비용을 절감하는 서비스입니다. 지오영은 국내 최대 규모의
          병원 GPO 네트워크를 운영하며, 의료기관의 구매 비용 절감과 운영
          효율화를 지원합니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          의약품뿐 아니라 의료소모품, 의료기기 등 병원 운영에 필요한 전
          품목에 대한 공동구매 서비스를 제공하고 있습니다.
        </p>
      </div>

      {/* Process */}
      <div className="bg-neutral rounded-lg p-8 mb-8">
        <h4 className="text-lg font-bold text-text-main mb-6 text-center">GPO 서비스 프로세스</h4>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {["니즈 분석", "공급사 협상", "가격 최적화", "공동구매 실행", "성과 리포트"].map(
            (step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-text-main font-medium mt-2 text-center">{step}</p>
                </div>
                {idx < 4 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 hidden md:block">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </BusinessPageLayout>
  );
}
