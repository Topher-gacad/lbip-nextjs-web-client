import type { Metadata } from "next";
import { RouteLayout } from "@/types/layout-type";
import { Montserrat } from "next/font/google";
import "@fontsource/montserrat";
import AppProvider from "@/providers";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synx",
  description: "The Best Scheduler System",
};

export default function RootLayout({ children }: RouteLayout) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
