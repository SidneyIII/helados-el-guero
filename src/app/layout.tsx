import type { Metadata } from "next";
import { Anton, Baloo_2 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Helados El Güero | Council Bluffs, IA",
  description:
    "Family-owned Mexican ice cream shop in Council Bluffs, Iowa. Paletas, helados, esquites, elotes, mangonadas, tostilocos, and fresas con crema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${baloo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white font-body text-espresso">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
