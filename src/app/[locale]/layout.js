import Nav from "../../../components/Nav/Nav";
import Script from "next/script";
import Head from "next/head";
import "../globals.css";

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-MKL5XR2J');`,
        }}
      />
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
