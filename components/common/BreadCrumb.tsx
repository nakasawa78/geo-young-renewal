import Link from "next/link";

interface BreadCrumbProps {
  items: { name: string; href?: string }[];
}

export default function BreadCrumb({ items }: BreadCrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link href="/" className="text-white/40 hover:text-white transition-colors">
        HOME
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-2">
          <span className="text-white/20">/</span>
          {item.href ? (
            <Link href={item.href} className="text-white/40 hover:text-white transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-white/80">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
