"use client";

import { useEffect } from "react";

export function ForceTopOnLoad() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = "manual";
      }

      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }

      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
