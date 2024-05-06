import Homepage from "../../../components/_Home/Homepage";

export default async function Home({ params: { locale } }) {
  return (
    <main>
      <Homepage locale={locale} />
    </main>
  );
}
