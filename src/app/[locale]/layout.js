import Nav from "../../../components/Nav/Nav";
import Script from "next/script";
import "../globals.css";

export const metadata = {
  title: "German Pavilion 2024",
  description:
    "The German Pavilion 2024 at the 60th International Art Exhibition — La Biennale di Venezia",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Script
        strategy="afterInteractive"
        src="https://cdn.consentmanager.net/delivery/autoblocking/04ba2a2631d12.js"
        data-cmp-ab="1"
        data-cmp-host="d.delivery.consentmanager.net"
        data-cmp-cdn="cdn.consentmanager.net"
        data-cmp-codesrc="1"
      />

      <body>
        <Nav locale={locale} />
        {children}
      </body>
    </html>
  );
}
