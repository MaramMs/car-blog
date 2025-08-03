import { client } from "./client";

export async function getServices() {
  try {
    const query = `*[_type == "services"]{
      title,
      question,
      description,
      publishedAt,
      slug,
      mainImage{
      asset->{
      url
      }
      },
  body,
    }`;
    const clients = await client.fetch(query);
    console.log("Posts fetched:", clients);
    return clients;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
