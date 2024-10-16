import {
  Inter,
  Kanit,
  Roboto,
  Roboto_Condensed,
  Roboto_Flex,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const flex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-flex",
  display: "swap",
  weight: "700",
});
