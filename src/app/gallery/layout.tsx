import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding & Event Gallery - Colorado Celebrations",
  description: "Browse our curated collection of beautiful moments from weddings, parties, and celebrations across Colorado's most stunning venues.",
  openGraph: {
    title: "Wedding & Event Gallery - Colorado Celebrations | Highvale Events",
    description: "Browse our curated collection of beautiful moments from weddings, parties, and celebrations across Colorado's most stunning venues.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Wedding & Event Gallery - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Wedding & Event Gallery - Colorado Celebrations | Highvale Events",
    description: "Browse our curated collection of beautiful moments from weddings, parties, and celebrations across Colorado's most stunning venues.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
