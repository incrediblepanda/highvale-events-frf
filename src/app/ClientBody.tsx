"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body
      className="antialiased"
      suppressHydrationWarning
      data-element="document-body"
      data-name="Document Body"
    >
      {children}
    </body>
  );
}
