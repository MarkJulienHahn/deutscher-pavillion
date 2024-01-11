import Nav from "../../../components/Nav/Nav";
import "../globals.css";

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <Nav locale={locale}/>
        {children}
      </body>
    </html>
  );
}
