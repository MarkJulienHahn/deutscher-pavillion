import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "e3hvjjmw",
  dataset: "production",
  apiVersion: "2023-12-13",
});

export default client;

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"]{...}`
  );
}

export async function getArtists() {
  return client.fetch(
    groq`*[_type == "artists"]|order(orderRank){..., "image": image{..., "asset": asset->{...}
  }}`
  );
}

export async function getCurators() {
  return client.fetch(
    groq`*[_type == "curators"]|order(orderRank){..., "image": image{..., "asset": asset->{...}
  }}`
  );
}

export async function getVisit() {
  return client.fetch(groq`*[_type == "visit"]|order(orderRank){...}`);
}

export async function getPress() {
  return client.fetch(
    groq`*[_type == "press"]|order(orderRank){..., "downloads": downloads[]{..., file{..., "asset": asset->{...}}}}`
  );
}

export async function getNewsletter() {
  return client.fetch(groq`*[_type == "newsletter"]|order(orderRank){...}`);
}

export async function getTeam() {
  return client.fetch(groq`*[_type == "team"]|order(orderRank){...}`);
}

export async function getThanks() {
  return client.fetch(
    groq`*[_type == "dank"]|order(orderRank){..., "logos": logos[]{..., "asset": asset->{...}}}`
  );
}

export async function getExhibitionPavillion() {
  return client.fetch(
    groq`*[_type == "exhibitionPavillion"]|{..., "images": images[]{..., "asset": asset->{...}}, "artists": artists[]->{"name": name, "slug": slug}}`
  );
}

export async function getExhibitionCertosa() {
  return client.fetch(
    groq`*[_type == "exhibitionCertosa"]|{..., "images": images[]{..., "asset": asset->{...}}, "artists": artists[]->{"name": name, "slug": slug}}`
  );
}

export async function getProgramPavillion() {
  return client.fetch(
    groq`*[_type == "programPavillion"]{...}`
  );
}

export async function getProgramCertosa() {
  return client.fetch(
    groq`*[_type == "programCertosa"]{...}`
  );
}

export async function getImprint() {
  return client.fetch(
    groq`*[_type == "imprint"]{...}`
  );
}

export async function getPrivacy() {
  return client.fetch(
    groq`*[_type == "privacy"]{...}`
  );
}
