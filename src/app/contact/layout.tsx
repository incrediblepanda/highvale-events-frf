import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Ready to start planning your dream event? Contact Highvale Events today to discuss your wedding or celebration in Colorado.",
  openGraph: {
    title: "Contact Us - Get in Touch | Highvale Events",
    description: "Ready to start planning your dream event? Contact Highvale Events today to discuss your wedding or celebration in Colorado.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Contact Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Get in Touch | Highvale Events",
    description: "Ready to start planning your dream event? Contact Highvale Events today to discuss your wedding or celebration in Colorado.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
