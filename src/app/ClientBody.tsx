"use client";

import { useEffect } from "react";
import ViewportDebugger from "@/components/ViewportDebugger";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // client-only runtime adjustments
    document.body.classList.add("antialiased");
    document.body.style.overflowX = "hidden";

    // Robust --vh calculation using VisualViewport when available
    let rafId: number | null = null;

    const setVh = () => {
      const viewportHeight = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
      const vh = viewportHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    const scheduleSetVh = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setVh();
        rafId = null;
      });
    };

    setVh();

    // Listen to multiple sources of viewport change
    window.addEventListener("resize", scheduleSetVh);
    window.addEventListener("orientationchange", scheduleSetVh);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", scheduleSetVh);
      window.visualViewport.addEventListener("scroll", scheduleSetVh);
    }

    // Also update when page becomes visible again (e.g., after switching apps)
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") scheduleSetVh();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("resize", scheduleSetVh);
      window.removeEventListener("orientationchange", scheduleSetVh);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", scheduleSetVh);
        window.visualViewport.removeEventListener("scroll", scheduleSetVh);
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (rafId != null) cancelAnimationFrame(rafId);
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
      <ViewportDebugger />
    </body>
  );
}
