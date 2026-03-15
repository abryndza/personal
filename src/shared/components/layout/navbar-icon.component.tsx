import type { ReactNode } from "react";

type NavbarIconProps = {
  children?: ReactNode;
};

export const NavbarIcon = ({ children }: NavbarIconProps) => {
  return (
    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-bg dark:hover:bg-gray-400 transition-colors duration-200 cursor-pointer border-0 appearance-none p-0">
      {children}
    </span>
  );
};
