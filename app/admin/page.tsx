"use client";

import { useState, useEffect } from "react";
import { themes, getThemeById, DEFAULT_THEME_ID, type Theme } from "@/lib/themes";

/* ──────────── Mini Preview Component ──────────── */
function ThemePreview({ theme }: { theme: Theme }) {
  const c = theme.colors;
  return (
    <div
      className="rounded-lg overflow-hidden border border-gray-200 shadow-sm"
      style={{ background: c.background }}
    >
      {/* Hero preview */}
      <div
        className="relative h-32 flex flex-col items-center justify-center px-4"
        style={{ background: `linear-gradient(135deg, ${c.secondary}, ${c.primary})` }}
      >
        {/* Decorative elements based on style */}
        {theme.style === "decorative" && (
          <>
            <div
              className="absolute top-2 right-3 w-16 h-16 rounded-full blur-xl opacity-30"
              style={{ background: c.accent }}
            />
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <defs>
                <pattern id={`grid-${theme.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke={c.accent} strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${theme.id})`} />
            </svg>
          </>
        )}
        {theme.style === "moderate" && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-30"
            style={{ background: c.accent }}
          />
        )}
        <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 mb-1" style={{ color: c.accent }}>
          Healthcare Partner
        </span>
        <span
          className="text-sm font-bold relative z-10"
          style={{
            color: "#fff",
            fontFamily: theme.fonts.display === "serif" ? "Playfair Display, serif" : "DM Sans, sans-serif",
          }}
        >
          종합 헬스케어 플랫폼
        </span>
        <div className="flex gap-2 mt-2 relative z-10">
          <span
            className="px-2 py-0.5 text-[9px] rounded-sm text-white"
            style={{ background: c.primary }}
          >
            사업 소개
          </span>
          <span
            className="px-2 py-0.5 text-[9px] rounded-sm border"
            style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
          >
            회사 소개
          </span>
        </div>
      </div>

      {/* Content preview */}
      <div className="p-3 space-y-2">
        {/* Stats row */}
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 rounded px-2 py-1.5 text-center"
              style={{ background: c.neutral }}
            >
              <div className="text-xs font-bold" style={{ color: c.primary }}>
                {i * 12}+
              </div>
              <div className="text-[8px]" style={{ color: c.gray }}>
                항목
              </div>
            </div>
          ))}
        </div>

        {/* Card preview */}
        <div className="flex gap-2">
          <div
            className="flex-1 rounded p-2"
            style={{ background: c.neutral }}
          >
            <div
              className="w-full h-8 rounded mb-1"
              style={{ background: `linear-gradient(135deg, ${c.primary}22, ${c.accent}22)` }}
            />
            <div className="h-1 w-3/4 rounded-full mb-0.5" style={{ background: c.textMain + "33" }} />
            <div className="h-1 w-1/2 rounded-full" style={{ background: c.textMain + "22" }} />
          </div>
          <div
            className="flex-1 rounded p-2"
            style={{ background: c.neutral }}
          >
            <div
              className="w-full h-8 rounded mb-1"
              style={{ background: `linear-gradient(135deg, ${c.accent}22, ${c.primary}22)` }}
            />
            <div className="h-1 w-2/3 rounded-full mb-0.5" style={{ background: c.textMain + "33" }} />
            <div className="h-1 w-1/3 rounded-full" style={{ background: c.textMain + "22" }} />
          </div>
        </div>

        {/* Footer preview */}
        <div
          className="rounded px-2 py-1.5 flex items-center justify-between"
          style={{ background: c.secondary }}
        >
          <span className="text-[8px] font-bold" style={{ color: "#fff" }}>
            GEO-YOUNG
          </span>
          <div className="flex gap-1">
            {[c.primary, c.accent, c.gray].map((color, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────── Color Swatch ──────────── */
function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-5 h-5 rounded border border-gray-300 shrink-0"
        style={{ background: color }}
      />
      <div className="min-w-0">
        <div className="text-[11px] text-gray-500">{label}</div>
        <div className="text-[10px] font-mono text-gray-400">{color}</div>
      </div>
    </div>
  );
}

/* ──────────── Admin Page ──────────── */
export default function AdminPage() {
  const [selectedId, setSelectedId] = useState<string>(DEFAULT_THEME_ID);
  const [appliedId, setAppliedId] = useState<string>(DEFAULT_THEME_ID);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("geo-young-theme");
    if (saved && getThemeById(saved)) {
      setSelectedId(saved);
      setAppliedId(saved);
    }
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleApply = () => {
    const theme = getThemeById(selectedId);
    if (!theme) return;

    // Apply CSS variables
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.colors.primary);
    root.style.setProperty("--secondary", theme.colors.secondary);
    root.style.setProperty("--accent", theme.colors.accent);
    root.style.setProperty("--neutral", theme.colors.neutral);
    root.style.setProperty("--text-main", theme.colors.textMain);
    root.style.setProperty("--gray", theme.colors.gray);
    root.setAttribute("data-theme", theme.id);
    root.setAttribute("data-theme-style", theme.style);

    localStorage.setItem("geo-young-theme", theme.id);
    setAppliedId(theme.id);
    showToast(`"${theme.nameKo}" 테마가 적용되었습니다!`);
  };

  const handleReset = () => {
    setSelectedId(DEFAULT_THEME_ID);
    const theme = getThemeById(DEFAULT_THEME_ID)!;
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.colors.primary);
    root.style.setProperty("--secondary", theme.colors.secondary);
    root.style.setProperty("--accent", theme.colors.accent);
    root.style.setProperty("--neutral", theme.colors.neutral);
    root.style.setProperty("--text-main", theme.colors.textMain);
    root.style.setProperty("--gray", theme.colors.gray);
    root.setAttribute("data-theme", theme.id);
    root.setAttribute("data-theme-style", theme.style);
    localStorage.setItem("geo-young-theme", DEFAULT_THEME_ID);
    setAppliedId(DEFAULT_THEME_ID);
    showToast("기본 테마로 초기화되었습니다.");
  };

  const selectedTheme = getThemeById(selectedId)!;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-xl text-sm font-medium animate-fade-in">
          {toast}
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="text-lg font-bold text-gray-900 tracking-tight">
              GEO-YOUNG
            </a>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Admin</span>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              사이트로 돌아가기 &rarr;
            </a>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">디자인 테마 관리</h1>
          <p className="text-gray-500 text-sm">
            사이트에 적용할 디자인 테마를 선택하세요. 미리보기를 확인하고 원하는 테마를 적용할 수 있습니다.
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-24">
          {themes.map((theme) => {
            const isSelected = selectedId === theme.id;
            const isApplied = appliedId === theme.id;

            return (
              <div
                key={theme.id}
                onClick={() => setSelectedId(theme.id)}
                className={`
                  relative cursor-pointer rounded-xl border-2 bg-white p-5 transition-all duration-200
                  ${isSelected
                    ? "border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }
                `}
              >
                {/* Applied badge */}
                {isApplied && (
                  <div className="absolute -top-2.5 right-4 bg-green-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    현재 적용중
                  </div>
                )}

                {/* Theme Name & Tags */}
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-base">{theme.nameKo}</h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isSelected ? "border-blue-500" : "border-gray-300"}`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium tracking-wide">{theme.name}</p>
                  <div className="flex gap-1.5 mt-2">
                    {theme.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <ThemePreview theme={theme} />

                {/* Description */}
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {theme.descriptionKo}
                </p>

                {/* Color Palette */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                      Color Palette
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    <ColorSwatch color={theme.colors.primary} label="Primary" />
                    <ColorSwatch color={theme.colors.secondary} label="Secondary" />
                    <ColorSwatch color={theme.colors.accent} label="Accent" />
                    <ColorSwatch color={theme.colors.neutral} label="Neutral" />
                  </div>
                </div>

                {/* Style indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    Style:
                  </span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((level) => (
                      <div
                        key={level}
                        className={`w-2 h-2 rounded-sm ${
                          (theme.style === "minimal" && level <= 1) ||
                          (theme.style === "moderate" && level <= 2) ||
                          (theme.style === "decorative" && level <= 3)
                            ? "bg-gray-700"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 capitalize">{theme.style}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Bar - fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-500">
            선택: <strong className="text-gray-900">{selectedTheme.nameKo}</strong>
            {selectedId !== appliedId && (
              <span className="ml-2 text-amber-600 text-xs">(미적용)</span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              기본값으로 초기화
            </button>
            <button
              onClick={handleApply}
              disabled={selectedId === appliedId}
              className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors ${
                selectedId === appliedId
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              }`}
            >
              테마 적용하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

