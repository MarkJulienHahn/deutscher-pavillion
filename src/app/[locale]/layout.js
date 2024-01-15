import Nav from "../../../components/Nav/Nav";
import Script from "next/script";
import Head from "next/head";
import "../globals.css";

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Head>
        {/* <script
          type="text/javascript"
          data-cmp-ab="1"
          src="https://cdn.consentmanager.net/delivery/autoblocking/04ba2a2631d12.js"
          data-cmp-host="d.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="1"
        ></script> */}
      </Head>
      {/* <Script
        async
        strategy="beforeInteractive"
        src="https://cdn.consentmanager.net/delivery/autoblocking/04ba2a2631d12.js"
        data-cmp-ab="1"
        data-cmp-host="d.delivery.consentmanager.net"
        data-cmp-cdn="cdn.consentmanager.net"
        data-cmp-codesrc="1"
      /> */}
      <body>
        <Nav locale={locale} />
        {children}
      </body>
    </html>
  );
}
