export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nasco Test",
  description: "Built with NextJS/NextUI",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Users",
      href: "/users",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/omneimneh/nasco-test",
    docs: "https://nextui.org"
  },
};
