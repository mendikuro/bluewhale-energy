import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { asset } from "@/lib/paths";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlueWhale Energy Services Nigeria Limited — Integrated Oil & Gas Services",
  description:
    "BlueWhale Energy Services Nigeria Limited delivers well intervention, drilling & completions, facilities engineering, procurement and marine support services to Nigeria's oil & gas industry — safely, efficiently, and to world-class standards.",
  keywords: [
    "oil and gas services Nigeria",
    "well intervention",
    "drilling and completions",
    "facilities engineering",
    "procurement Port Harcourt",
    "marine offshore support Nigeria",
    "BlueWhale Energy Services Nigeria Limited",
  ],
  authors: [{ name: "BlueWhale Energy Services Nigeria Limited" }],
  icons: {
    icon: asset("/logo.svg"),
  },
  openGraph: {
    title: "BlueWhale Energy Services Nigeria Limited — Integrated Oil & Gas Services",
    description:
      "Well intervention, drilling & completions, facilities engineering and procurement services delivered to world-class standards across Nigeria.",
    siteName: "BlueWhale Energy Services Nigeria Limited",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
