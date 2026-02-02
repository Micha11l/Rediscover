"use client";

import { useLayoutEffect } from "react";

export function ForceTopOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // 强制关闭浏览器滚动恢复（如果支持）
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {}

    const root = document.documentElement;
    const body = document.body;

    // 临时禁用 smooth scroll，避免某些环境下 scrollTo 被平滑动画打断/覆盖
    const prevScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const hardScrollTop = () => {
      root.scrollTop = 0;
      body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    // 多次置顶：压住 hash 定位 / Next hydration restore / 浏览器二次 restore
    hardScrollTop();

    const timeouts: number[] = [];
    const pushTimeout = (ms: number) => {
      timeouts.push(window.setTimeout(hardScrollTop, ms));
    };

    requestAnimationFrame(() => hardScrollTop());
    pushTimeout(0);
    pushTimeout(50);
    pushTimeout(200);
    pushTimeout(500);

    const onLoad = () => hardScrollTop();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      timeouts.forEach((t) => window.clearTimeout(t));
      root.style.scrollBehavior = prevScrollBehavior;
    };
  }, []);

  return null;
}
