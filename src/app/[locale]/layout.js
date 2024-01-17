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
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WM9T5LT8');
          `,
        }}
      />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WM9T5LT8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Nav locale={locale} />
        {children}
      </body>
    </html>
  );
}
