import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbh_sans_init = Kumbh_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-kumbh",
});

export const metadata: Metadata = {
  title: "Leul Mesfin",
  description: "A Leul Mesfin site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbh_sans_init.variable} antialiased bg-[#181818]`}
      >
        {children}
      </body>
    </html>
  );
}
