import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Planning Process - How We Work",
  description: "Learn about our comprehensive event planning process. From initial consultation to your perfect day, discover how we make your celebration dreams come true.",
  openGraph: {
    title: "Our Planning Process - How We Work | Highvale Events",
    description: "Learn about our comprehensive event planning process. From initial consultation to your perfect day, discover how we make your celebration dreams come true.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Our Planning Process - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Our Planning Process - How We Work | Highvale Events",
    description: "Learn about our comprehensive event planning process. From initial consultation to your perfect day, discover how we make your celebration dreams come true.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
