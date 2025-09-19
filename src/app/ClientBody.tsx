"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.classList.add("antialiased");

    // Set CSS var --vh to be 1% of the viewport height to work around mobile UI chrome
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    // Prevent body from having an explicit height that might create nested scrolling
    document.body.style.overflowX = "hidden";

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
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
