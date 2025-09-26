import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Planning Services - Bachelorette & Corporate Events",
  description: "From bachelorette parties to corporate events, we create memorable celebrations that exceed expectations. Professional party planning in Colorado.",
  openGraph: {
    title: "Party Planning Services - Bachelorette & Corporate Events | Highvale Events",
    description: "From bachelorette parties to corporate events, we create memorable celebrations that exceed expectations. Professional party planning in Colorado.",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae",
        width: 1200,
        height: 630,
        alt: "Party Planning Services - Highvale Events",
      },
    ],
  },
  twitter: {
    title: "Party Planning Services - Bachelorette & Corporate Events | Highvale Events",
    description: "From bachelorette parties to corporate events, we create memorable celebrations that exceed expectations. Professional party planning in Colorado.",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F59a03adf7fb04f0fa02809a1cf36b9ae"],
  },
};

export default function PartyPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
