"use client";

import { useEffect } from "react"

import Script from "next/script";

const CookieConsentScript = () => {
  return (
    <Script
      async
      strategy="beforeInteractive"
      src="https://cdn.consentmanager.net/delivery/autoblocking/04ba2a2631d12.js"
      data-cmp-ab="1"
      data-cmp-host="d.delivery.consentmanager.net"
      data-cmp-cdn="cdn.consentmanager.net"
      data-cmp-codesrc="1"
    />
  );
};

export default CookieConsentScript;
