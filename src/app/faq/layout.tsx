import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Event Planning",
  description: "Find answers to common questions about our wedding and event planning services. Learn about our process, pricing, and what to expect.",
  openGraph: {
    title: "Frequently Asked Questions - Event Planning | Highvale Events",
    description: "Find answers to common questions about our wedding and event planning services. Learn about our process, pricing, and what to expect.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "FAQ - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Frequently Asked Questions - Event Planning | Highvale Events",
    description: "Find answers to common questions about our wedding and event planning services. Learn about our process, pricing, and what to expect.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
