import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Colorado Event Planning Experts",
  description: "Meet the passionate team behind Highvale Events. Learn about our story, values, and commitment to creating unforgettable celebrations in Colorado.",
  openGraph: {
    title: "About Us - Colorado Event Planning Experts | Highvale Events",
    description: "Meet the passionate team behind Highvale Events. Learn about our story, values, and commitment to creating unforgettable celebrations in Colorado.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "About Highvale Events - Colorado Event Planning Experts",
      },
    ],
  },
  twitter: {
    title: "About Us - Colorado Event Planning Experts | Highvale Events",
    description: "Meet the passionate team behind Highvale Events. Learn about our story, values, and commitment to creating unforgettable celebrations in Colorado.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
