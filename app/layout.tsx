import type { Metadata } from "next";
import { Inter, Tektur } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/provider/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const orbitron = Tektur({
  subsets: ["latin"],
  variable: "--font-tektur",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
