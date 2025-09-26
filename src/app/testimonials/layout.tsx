import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials - What Our Couples Say",
  description: "Read heartfelt testimonials from our happy couples and clients. Discover why Colorado chooses Highvale Events for their most important celebrations.",
  openGraph: {
    title: "Client Testimonials - What Our Couples Say | Highvale Events",
    description: "Read heartfelt testimonials from our happy couples and clients. Discover why Colorado chooses Highvale Events for their most important celebrations.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Client Testimonials - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Client Testimonials - What Our Couples Say | Highvale Events",
    description: "Read heartfelt testimonials from our happy couples and clients. Discover why Colorado chooses Highvale Events for their most important celebrations.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
