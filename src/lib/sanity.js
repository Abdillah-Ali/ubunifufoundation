import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "kbbqk3r8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-11", // use current date
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
