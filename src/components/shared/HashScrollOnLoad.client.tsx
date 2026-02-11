"use client";

import { useEffect } from "react";

export function HashScrollOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const id = hash.slice(1);
    const rafId = requestAnimationFrame(() => {
      setTimeout(() => {
        const target = document.getElementById(id);
        if (!target) {
          return;
        }
        target.scrollIntoView({ block: "start" });
      }, 0);
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
