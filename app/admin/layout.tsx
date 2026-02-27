import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | 지오영 그룹 디자인 관리",
  description: "디자인 테마 선택 및 관리",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
