import Link from "next/link";

interface TagBadgeProps {
  name: string;
  isSelected?: boolean;
  href: string;
  className?: string;
}

export const TagBadge = ({
  name,
  isSelected = false,
  href,
  className = "",
}: TagBadgeProps) => {
  const baseClasses =
    "px-4 py-2 rounded-lg border-2 border-solid transition duration-500 ease-in-out text-md inline-block";

  const activeClasses =
    "bg-zinc-400 text-gray-900 border-zinc-400 font-bold hover:bg-zinc-300 hover:border-zinc-300 cursor-default";

  const inactiveClasses =
    "text-gray-400 bg-zinc-800 border-zinc-600 hover:bg-zinc-950 cursor-pointer";

  const combinedClasses = `${baseClasses} ${
    isSelected ? activeClasses : inactiveClasses
  } ${className}`.trim();

  return (
    <Link
      scroll={false}
      href={href}
      onClick={(e) => {
        if (isSelected) e.preventDefault();
      }}
      aria-current={isSelected ? "page" : undefined}
      className={combinedClasses}
    >
      {name}
    </Link>
  );
};
