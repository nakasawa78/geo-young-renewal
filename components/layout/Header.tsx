"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuData = [
  {
    title: "그룹소개",
    titleEn: "COMPANY",
    items: [
      { name: "비전", href: "/company/vision" },
      { name: "회장인사말", href: "/company/greeting" },
      { name: "연혁", href: "/company/history" },
      { name: "CI", href: "/company/ci" },
      { name: "찾아오시는 길", href: "/company/location" },
    ],
  },
  {
    title: "사업소개",
    titleEn: "BUSINESS",
    items: [
      { name: "의약품유통", href: "/business/pharmacy" },
      { name: "3PL / 4PL & CSMO", href: "/business/pl" },
      { name: "병원 GPO", href: "/business/gpo" },
      { name: "방사성의약품", href: "/business/radiopharmaceutical" },
      { name: "헬스케어IT", href: "/business/healthcare" },
    ],
  },
  {
    title: "홍보센터",
    titleEn: "PR CENTER",
    items: [
      { name: "보도자료", href: "/promotion/report" },
      { name: "공지사항", href: "/promotion/notice" },
      { name: "고객문의", href: "/promotion/consult" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeMenu !== null
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10">
              <div
                className={`font-display font-bold text-2xl transition-colors duration-300 ${
                  isScrolled || activeMenu !== null
                    ? "text-primary"
                    : "text-white"
                }`}
              >
                GEO-YOUNG
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-12">
              {menuData.map((menu, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(idx)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`text-[15px] font-medium tracking-wide transition-colors duration-300 py-8 ${
                      isScrolled || activeMenu !== null
                        ? "text-text-main hover:text-primary"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {menu.title}
                  </button>
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled || activeMenu !== null
                    ? "text-text-main"
                    : "text-white"
                }`}
              >
                KOR
              </button>
              <span
                className={`text-xs transition-colors duration-300 ${
                  isScrolled || activeMenu !== null
                    ? "text-gray-300"
                    : "text-white/30"
                }`}
              >
                |
              </span>
              <button
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled || activeMenu !== null
                    ? "text-gray-400"
                    : "text-white/60"
                }`}
              >
                ENG
              </button>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`ml-2 transition-colors duration-300 ${
                  isScrolled || activeMenu !== null
                    ? "text-text-main"
                    : "text-white"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden z-10 p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isMobileOpen
                      ? "rotate-45 translate-y-2 bg-white"
                      : isScrolled
                      ? "bg-text-main"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isMobileOpen
                      ? "opacity-0"
                      : isScrolled
                      ? "bg-text-main"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-0.5 transition-all duration-300 ${
                    isMobileOpen
                      ? "-rotate-45 -translate-y-2 bg-white"
                      : isScrolled
                      ? "bg-text-main"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-container mx-auto px-6 lg:px-8 py-10">
                <div className="grid grid-cols-3 gap-16">
                  {menuData.map((menu, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs tracking-widest text-gray-400 mb-4">
                        {menu.titleEn}
                      </h3>
                      <ul className="space-y-3">
                        {menu.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              href={item.href}
                              className={`text-[15px] transition-colors duration-200 ${
                                idx === activeMenu
                                  ? "text-text-main font-medium hover:text-primary"
                                  : "text-gray-400 hover:text-gray-600"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-secondary lg:hidden"
          >
            <div className="pt-24 px-8 pb-8 h-full overflow-y-auto">
              {menuData.map((menu, idx) => (
                <div key={idx} className="mb-8">
                  <h3 className="text-accent text-xs tracking-widest mb-4">
                    {menu.titleEn}
                  </h3>
                  <ul className="space-y-3">
                    {menu.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          className="text-white text-lg font-light hover:text-accent transition-colors"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <button className="text-white text-sm">KOR</button>
                  <span className="text-white/30">|</span>
                  <button className="text-white/60 text-sm">ENG</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
