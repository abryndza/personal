import { UnstyledButton, useMantineColorScheme } from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react";
import { ExternalLink } from "../ui";
import { NavbarIcon } from "./navbar-icon.component";

const socialLinks = [
  {
    href: "https://github.com/abryndza",
    label: "My Github profile",
    icon: IconBrandGithubFilled,
  },
  {
    href: "https://www.linkedin.com/in/adam-bryndza",
    label: "My LinkedIn profile",
    icon: IconBrandLinkedinFilled,
  },
];

export const NavbarIcons = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <ExternalLink key={link.href} href={link.href} label={link.label}>
            <NavbarIcon>
              <Icon size={20} />
            </NavbarIcon>
          </ExternalLink>
        );
      })}

      <UnstyledButton
        onClick={() => toggleColorScheme()}
        aria-label="Toggle theme"
      >
        <NavbarIcon>
          {colorScheme === "dark" ? (
            <IconSunFilled size={20} />
          ) : (
            <IconMoonFilled size={20} />
          )}
        </NavbarIcon>
      </UnstyledButton>
    </>
  );
};
