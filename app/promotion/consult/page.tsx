"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    type: "일반문의",
    company: "",
    name: "",
    email: "",
    phone: "",
    title: "",
    content: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox"
      ? target.checked
      : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.");
  };

  return (
    <>
      <PageHero
        title="고객문의"
        subtitle="무엇이든 편하게 문의해 주세요"
        breadcrumb={[
          { name: "홍보센터", href: "/promotion/report" },
          { name: "고객문의" },
        ]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-neutral rounded-lg p-6 mb-10">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-text-main">전화 문의:</span>{" "}
                02-526-3700 (평일 09:00~18:00)
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium text-text-main">팩스:</span>{" "}
                02-526-3790
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                >
                  <option>일반문의</option>
                  <option>사업제휴</option>
                  <option>채용문의</option>
                  <option>기타</option>
                </select>
              </div>

              {/* Company & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="회사명을 입력하세요"
                    className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">
                  제목 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력하세요"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-text-main mb-2">
                  내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="문의 내용을 상세히 작성해 주세요"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 accent-primary"
                />
                <label className="text-sm text-gray-600">
                  <span className="font-medium text-text-main">개인정보 수집 및 이용에 동의합니다.</span>
                  <br />
                  <span className="text-xs text-gray-400">
                    수집항목: 이름, 이메일, 연락처 / 이용목적: 문의 답변 / 보유기간: 답변 완료 후 3개월
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-primary text-white text-sm font-medium rounded hover:bg-primary/90 transition-colors"
                >
                  문의하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
