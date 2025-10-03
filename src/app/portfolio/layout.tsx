import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our Work & Celebrations",
  description: "Explore our portfolio of stunning weddings, parties, and events across Colorado. See how we bring dreams to life through exceptional planning.",
  openGraph: {
    title: "Portfolio - Our Work & Celebrations | Highvale Events",
    description: "Explore our portfolio of stunning weddings, parties, and events across Colorado. See how we bring dreams to life through exceptional planning.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Portfolio - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Portfolio - Our Work & Celebrations | Highvale Events",
    description: "Explore our portfolio of stunning weddings, parties, and events across Colorado. See how we bring dreams to life through exceptional planning.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
