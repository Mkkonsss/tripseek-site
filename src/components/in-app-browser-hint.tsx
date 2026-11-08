"use client";

import { useEffect, useState } from "react";

// TikTok's in-app browser blocks App Store links, so tell visitors how to get to Safari
const IN_APP_BROWSER = /musical_ly|BytedanceWebview|TikTok/i;

export default function InAppBrowserHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(IN_APP_BROWSER.test(navigator.userAgent));
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] rounded-2xl bg-black text-white px-5 py-4 text-sm shadow-lg">
      <div className="font-semibold mb-1">To download Tripseek</div>
      <div className="text-white/70">
        Tap <span className="font-semibold text-white">•••</span> at the top right, then{" "}
        <span className="font-semibold text-white">Open in browser</span>. TikTok doesn&apos;t open App Store links.
      </div>
    </div>
  );
}
