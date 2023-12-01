import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ouy7dg4a",
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: true,
});
