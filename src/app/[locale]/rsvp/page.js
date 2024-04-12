import Head from "next/head";

import Rsvp from "../../../../components/Rsvp/Rsvp";
import { getArtists, getArtistImages } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const artistImages = await getArtistImages();
  return (
    <>
      <Head>
        <title>My Page</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="singlePageWrapper">
        <h1>RSVP</h1>
        {/* <p>RSVP is closed at the Moment. Please contact <a>mail@mail.de</a></p> */}
        {/* <Rsvp locale={locale} />  */}
      </div>
    </>
  );
}

export const revalidate = 10;
