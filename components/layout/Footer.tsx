import Link from "next/link";

const familySites = [
  { name: "지오영", url: "https://www.geo-young.com" },
  { name: "지오웹", url: "#" },
  { name: "지오몰", url: "#" },
  { name: "온그레이스케어", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Upper Footer */}
      <div className="max-w-container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display font-bold text-2xl text-white">
              GEO-YOUNG
            </Link>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              국내 최대규모
              <br />
              종합 헬스케어 플랫폼
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-accent text-xs tracking-widest mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {[
                { name: "비전", href: "/company/vision" },
                { name: "회장인사말", href: "/company/greeting" },
                { name: "연혁", href: "/company/history" },
                { name: "CI", href: "/company/ci" },
                { name: "찾아오시는 길", href: "/company/location" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-accent text-xs tracking-widest mb-4">BUSINESS</h4>
            <ul className="space-y-2">
              {[
                { name: "의약품유통", href: "/business/pharmacy" },
                { name: "3PL / 4PL & CSMO", href: "/business/pl" },
                { name: "병원 GPO", href: "/business/gpo" },
                { name: "방사성의약품", href: "/business/radiopharmaceutical" },
                { name: "헬스케어IT", href: "/business/healthcare" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Family Site */}
          <div>
            <h4 className="text-accent text-xs tracking-widest mb-4">FAMILY SITE</h4>
            <ul className="space-y-2">
              {familySites.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    {site.name}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-white/40 text-xs leading-relaxed">
              <p>대표이사 : 조선혜 | 사업자번호 : 109-81-78726</p>
              <p>TEL : 02-2635-0250 | FAX : 02-3141-6492</p>
              <p>서울특별시 서대문구 성산로 321 (연희동 421-1)</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-white/40 text-xs hover:text-white transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                href="#"
                className="text-white/40 text-xs hover:text-white transition-colors"
              >
                사이트맵
              </Link>
            </div>
          </div>
          <p className="mt-4 text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Geo-Young Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
