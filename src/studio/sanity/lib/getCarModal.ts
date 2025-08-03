import { client } from "./client";

export async function getAllCarModels() {
  const query = `
    *[_type == "carModel"] | order(title asc) {
      _id,
      title,
      slug
    }
  `;
  const data = await client.fetch(query);
  return data; 
}
