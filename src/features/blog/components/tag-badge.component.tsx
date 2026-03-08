import Link from "next/link";
import type { Tag } from "@/features/blog/interfaces";

interface TagBadgeProps {
  tag: Tag;
  isSelected?: boolean;
  href?: string;
  className?: string;
}

export const TagBadge = ({
  tag,
  isSelected = false,
  href,
  className = "",
}: TagBadgeProps) => {
  const baseClasses =
    "text-gray-400 bg-zinc-800 px-4 py-2 rounded-lg border-2 border-solid border-zinc-600 transition duration-500 ease-in-out text-md inline-block cursor-pointer";
  const hoverClasses =
    "hover:bg-zinc-950 aria-current:hover:bg-zinc-300 aria-current:hover:border-zinc-300";
  const activeClasses =
    "aria-current:bg-zinc-400 aria-current:text-gray-900 aria-current:border-zinc-400 aria-current:font-bold";

  const combinedClasses = `${baseClasses} ${hoverClasses} ${activeClasses} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        aria-current={isSelected ? "page" : undefined}
        className={combinedClasses}
      >
        {tag.name}
      </Link>
    );
  }

  return (
    <span
      aria-current={isSelected ? "page" : undefined}
      className={combinedClasses}
    >
      {tag.name}
    </span>
  );
};
