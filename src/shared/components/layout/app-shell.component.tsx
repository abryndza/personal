"use client";

import { AppShell as MantineAppShell } from "@mantine/core";
import { Footer } from "./footer.component";
import { Navbar } from "./navbar.component";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="px-5 laptop:px-20 min-h-screen flex flex-col justify-between gap-15 laptop:gap-20">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
