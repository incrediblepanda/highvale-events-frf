import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Say Hello - Let's Connect",
  description: "We'd love to hear from you! Say hello and let's start a conversation about your upcoming event or celebration.",
  openGraph: {
    title: "Say Hello - Let's Connect | Highvale Events",
    description: "We'd love to hear from you! Say hello and let's start a conversation about your upcoming event or celebration.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Say Hello - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Say Hello - Let's Connect | Highvale Events",
    description: "We'd love to hear from you! Say hello and let's start a conversation about your upcoming event or celebration.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function SayHiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
