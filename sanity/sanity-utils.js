import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "e3hvjjmw",
  dataset: "production",
  apiVersion: "2023-12-13",
});

export default client;

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]|order(orderRank){"image": image.asset->{...}}`
  );
}

export async function getProgram() {
  return client.fetch(groq`*[_type == "program"]|order(orderRank){...}`);
}

export async function getAbout() {
  return client.fetch(groq`*[_type == "about"]{...}`);
}

export async function getLivestream() {
  return client.fetch(groq`*[_type == "livestream"]{...}`);
}

export async function getArtists() {
  return client.fetch(
    groq`*[_type == "artists"]|order(orderRank){..., "portrait": portrait{..., "asset": asset->{...}}, "works": works[]{...,  "images": images[]{..., asset->{...}}}}`
  );
}

export async function getArtistImages() {
  return client.fetch(
    groq`*[_type == "artistImages"]{..., "imageLeft": imageLeft{..., "asset": asset->{...}
  }, "imageRight": imageRight{..., "asset": asset->{...}}, "imageRightMobile": imageRightMobile{..., "asset": asset->{...}}}`
  );
}

export async function getCuratorialConcept() {
  return client.fetch(
    groq`*[_type == "curatorialConcept"]{..., "portrait": portrait{..., "asset": asset->{...}
  }}`
  );
}

export async function getChroniclesIntro() {
  return client.fetch(groq`*[_type == "chroniclesIntro"]{...}`);
}

export async function getChronicles() {
  return client.fetch(
    groq`*[_type == "chronicles"]|order(orderRank){..., "image": image{..., "asset": asset->{...}
  }}`
  );
}

export async function getVisit() {
  return client.fetch(
    groq`*[_type == "visit"]|order(orderRank){..., "downloads": downloads[]{..., file{..., "asset": asset->{...}}, fileEnglish{..., "asset": asset->{...}}}}`
  );
}

export async function getPress() {
  return client.fetch(
    groq`*[_type == "press"]|order(orderRank){..., "downloads": downloads[]{..., file{..., "asset": asset->{...}}, fileEnglish{..., "asset": asset->{...}}}}`
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
    groq`*[_type == "dank"]{..., biennaleLogo{..., asset->{url}}, initialPartner{..., "logos": logos[]{..., asset->{url}}}, partner{..., "logos": logos[]{..., asset->{url}}}, "logos": logos[]{..., "asset": asset->{...}}, supporter{..., "logos": logos[]{..., asset->{url}}}, cooperation{..., "logos": logos[]{..., asset->{url}}}}`
  );
}

export async function getExhibitionPavillon() {
  return client.fetch(
    groq`*[_type == "exhibitionPavillon"]|{..., "images": images[]{..., "asset": asset->{...}}, "artists": artists[]->{"coverImage": coverImage{"asset": asset->{...}}, name, slug}}`
  );
}

export async function getExhibitionCertosa() {
  return client.fetch(
    groq`*[_type == "exhibitionCertosa"]|{..., "images": images[]{..., "asset": asset->{...}}, "artists": artists[]->{"coverImage": coverImage{"asset": asset->{...}}, name, slug}}`
  );
}

export async function getProgramPavillon() {
  return client.fetch(
    groq`*[_type == "programPavillon"]{..., "images": images[]{..., "asset": asset->{...}}}`
  );
}

export async function getProgramCertosa() {
  return client.fetch(
    groq`*[_type == "programCertosa"]{..., "images": images[]{..., "asset": asset->{...}}}`
  );
}

export async function getImprint() {
  return client.fetch(groq`*[_type == "imprint"]{...}`);
}

export async function getPrivacy() {
  return client.fetch(groq`*[_type == "privacy"]{...}`);
}

export async function getSpecial() {
  return client.fetch(
    groq`*[_type == "special"]{..., "images": images[]{..., "asset": asset->{...}}}`
  );
}

export async function getInterview() {
  return client.fetch(groq`*[_type == "ersanInterviews"]{...,"image": image{..., "asset": asset->{...}}}`);
}
