import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClientBody from "./ClientBody";

const ivyModeBody = localFont({
  src: "./fonts/ivy-mode-body.ttf",
  variable: "--font-ivy-body",
  display: "swap",
});

const ivyPrestoHeadline = localFont({
  src: [
    {
      path: "./fonts/ivy-presto-headline.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ivy-presto-headline-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ivy-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Highvale Events - Luxury Wedding & Event Planning in Colorado",
    template: "%s | Highvale Events"
  },
  description: "Colorado's premier luxury wedding and event planning company. Creating unforgettable celebrations in the heart of Colorado's most beautiful venues.",
  keywords: ["wedding planning", "event planning", "Colorado weddings", "luxury events", "party planning"],
  authors: [{ name: "Highvale Events" }],
  creator: "Highvale Events",
  publisher: "Highvale Events",
  metadataBase: new URL("https://highvaleevents.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Highvale Events - Luxury Wedding & Event Planning in Colorado",
    description: "Colorado's premier luxury wedding and event planning company. Creating unforgettable celebrations in the heart of Colorado's most beautiful venues.",
    url: "https://highvaleevents.com",
    siteName: "Highvale Events",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Highvale Events - Luxury Wedding & Event Planning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Highvale Events - Luxury Wedding & Event Planning in Colorado",
    description: "Colorado's premier luxury wedding and event planning company. Creating unforgettable celebrations in the heart of Colorado's most beautiful venues.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ivyModeBody.variable} ${ivyPrestoHeadline.variable}`}
      data-element="document-root"
      data-name="Document Root"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#F7F3EE" />
      </head>
      <ClientBody>
        <header data-element="site-header" data-name="Site Header">
          <Navigation />
        </header>
        <main
          data-element="main-content"
          data-name="Main Content Area"
        >
          {children}
        </main>
        <Footer />
      </ClientBody>
    </html>
  );
}
