"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import PageHero from "./PageHero";

const businessMenu = [
  { name: "의약품유통", href: "/business/pharmacy" },
  { name: "3PL / 4PL & CSMO", href: "/business/pl" },
  { name: "병원 GPO", href: "/business/gpo" },
  { name: "방사성의약품", href: "/business/radiopharmaceutical" },
  { name: "헬스케어IT", href: "/business/healthcare" },
];

interface BusinessPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function BusinessPageLayout({
  title,
  subtitle,
  children,
}: BusinessPageLayoutProps) {
  const pathname = usePathname();

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumb={[
          { name: "사업소개", href: "/business/pharmacy" },
          { name: title },
        ]}
      />

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Side Navigation */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h3 className="text-xs tracking-widest text-accent uppercase mb-4">
                BUSINESS
              </h3>
              <nav className="space-y-1">
                {businessMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-3 px-4 text-sm rounded transition-colors ${
                      pathname === item.href
                        ? "bg-primary text-white font-medium"
                        : "text-gray-600 hover:bg-neutral hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.aside>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
