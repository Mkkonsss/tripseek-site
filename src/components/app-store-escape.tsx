"use client";

import { useEffect } from "react";

// TikTok's in-app browser blocks App Store links. Inside it, App Store taps first try the
// App Store app's own link scheme, then fall back to reopening the page in Safari.
const IN_APP_BROWSER = /musical_ly|BytedanceWebview|TikTok/i;

export default function AppStoreEscape() {
  useEffect(() => {
    if (!IN_APP_BROWSER.test(navigator.userAgent)) return;

    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || !link.href.startsWith("https://apps.apple.com/")) return;
      e.preventDefault();

      const target = link.href.replace(/^https:\/\//, "");
      window.location.href = `itms-apps://${target}`;
      // If the App Store opened, the page is hidden by now and this does nothing
      setTimeout(() => {
        if (document.visibilityState === "visible") {
          window.location.href = `x-safari-https://${target}`;
        }
      }, 1200);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
