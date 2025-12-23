import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Halloff",
  description: "Halloff - Zamonaviy va professional dasturlash kurslari platformasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
