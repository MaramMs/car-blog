import { client } from "./client";

export async function getClients() {
  try {
    const query = `*[_type == "clients"]{
      name,
      publishedAt,
      mainImage{
      asset->{
      url
      }
      },
  message,
    }`;
    const clients = await client.fetch(query);
    console.log("Posts fetched:", clients);
    return clients;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
