import Nav from "../../../components/Nav/Nav";
import Script from "next/script";
import "../globals.css";

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <Nav locale={locale} />
        {children}
        <Script
          src="https://cdn.consentmanager.net/delivery/autoblocking/04ba2a2631d12.js"
          data-cmp-ab="1"
          data-cmp-host="d.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="1"
        />
      </body>
    </html>
  );
}
