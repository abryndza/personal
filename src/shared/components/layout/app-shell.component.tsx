"use client";

import { AppShell as MantineAppShell } from "@mantine/core";
import { Footer } from "./footer.component";
import { Navbar } from "./navbar.component";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <MantineAppShell
      header={{
        height: { base: 60, md: 104 },
      }}
      footer={{
        height: { base: 60, md: 104 },
      }}
      px={{ base: 20, md: 80 }}
      withBorder={false}
      mode="static"
      mih="100vh"
    >
      <MantineAppShell.Header bg={"transparent"}>
        <Navbar />
      </MantineAppShell.Header>
      <MantineAppShell.Main pt={{ base: 60, md: 104 }}>
        {children}
      </MantineAppShell.Main>
      <MantineAppShell.Footer bg="transparent">
        <Footer />
      </MantineAppShell.Footer>
    </MantineAppShell>
  );
};
