import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "e3hvjjmw",
  dataset: "production",
  apiVersion: "2023-12-13",
});

export default client;
