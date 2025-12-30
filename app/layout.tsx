import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Halloff",
  description: "Halloff - Zamonaviy va professional dasturlash kurslari platformasi",
  other: {
    "google-adsense-account": "ca-pub-3997503509642711"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3997503509642711" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3997503509642711" crossOrigin="anonymous"></script>
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
        
        {/* AdSense Auto Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-3997503509642711",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
