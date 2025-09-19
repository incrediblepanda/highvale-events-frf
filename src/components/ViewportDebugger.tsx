import { useEffect, useState } from "react";

export default function ViewportDebugger() {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem("viewport-debug-visible") === "1";
    } catch (e) {
      return false;
    }
  });

  const [metrics, setMetrics] = useState({
    innerHeight: 0,
    visualViewportHeight: 0,
    cssVh: "",
    orientation: "",
    scrollY: 0,
  });

  useEffect(() => {
    const read = () => {
      const innerHeight = window.innerHeight || 0;
      const visualViewportHeight = (window.visualViewport && window.visualViewport.height) || 0;
      const cssVh = getComputedStyle(document.documentElement).getPropertyValue("--vh").trim();
      const orientation = (screen && (screen.orientation && screen.orientation.type)) || (window.orientation !== undefined ? String(window.orientation) : "unknown");
      const scrollY = window.scrollY || 0;
      setMetrics({ innerHeight, visualViewportHeight, cssVh, orientation, scrollY });
    };

    read();
    let raf: number | null = null;
    const onChange = () => {
      if (raf != null) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        read();
        raf = null;
      });
    };

    window.addEventListener("resize", onChange);
    window.addEventListener("orientationchange", onChange);
    window.addEventListener("scroll", onChange, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", onChange);
      window.visualViewport.addEventListener("scroll", onChange);
    }

    return () => {
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
      window.removeEventListener("scroll", onChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", onChange);
        window.visualViewport.removeEventListener("scroll", onChange);
      }
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("viewport-debug-visible", visible ? "1" : "0");
    } catch (e) {
      /* ignore */
    }
  }, [visible]);

  // don't render in production
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div style={{ position: "fixed", right: 12, bottom: 12, zIndex: 99999, fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button
          onClick={() => setVisible(v => !v)}
          aria-label="Toggle viewport debugger"
          style={{
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            border: "none",
            padding: "8px 10px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 12,
          }}
        >
          {visible ? "Hide VH Debug" : "Show VH Debug"}
        </button>
      </div>

      {visible && (
        <div
          style={{
            marginTop: 8,
            width: 260,
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: 10,
            borderRadius: 10,
            boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
            fontSize: 12,
            lineHeight: "1.3",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Viewport</strong>
            <span style={{ opacity: 0.8 }}>{metrics.orientation}</span>
          </div>
          <div style={{ marginTop: 8 }}>
            <div>window.innerHeight: {metrics.innerHeight}px</div>
            <div>visualViewport.height: {metrics.visualViewportHeight}px</div>
            <div>--vh: {metrics.cssVh || "(unset)"}</div>
            <div>scrollY: {metrics.scrollY}px</div>
          </div>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                // force recalc
                const event = new Event("resize");
                window.dispatchEvent(event);
              }}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "6px 8px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              Recalc
            </button>
            <button
              onClick={() => {
                // scroll to bottom/top to help test address-bar show/hide
                if (window.scrollY < 100) window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "6px 8px",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              Scroll Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
