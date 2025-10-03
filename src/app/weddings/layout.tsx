import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Wedding Planning Services",
  description: "Transform your special day into an extraordinary celebration with our luxury wedding planning services in Colorado. From intimate ceremonies to grand celebrations.",
  openGraph: {
    title: "Luxury Wedding Planning Services | Highvale Events",
    description: "Transform your special day into an extraordinary celebration with our luxury wedding planning services in Colorado. From intimate ceremonies to grand celebrations.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding Planning Services - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Luxury Wedding Planning Services | Highvale Events",
    description: "Transform your special day into an extraordinary celebration with our luxury wedding planning services in Colorado. From intimate ceremonies to grand celebrations.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
