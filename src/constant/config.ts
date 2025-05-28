import AppLogo from "@/assets/app/well-perfo.png";
export const APP_CONFIG = {
  prefixStore: "hse",
  isDev: true,
  app: {
    name: "My Template",
    description: "A template for TanStack Router",
    logo: AppLogo,
    version: "1.0.0",
  },
  demoUser: {
    email: "phe@mail.com",
    password: "abc",
  },
  path: {
    defaultPublic: "/home",
    defaultPrivate: "/dashboard",
  }
}