import { client } from "./client";

export async function getPosts() {
  try {
    const query = `*[_type == "post"]{
      title,
      slug,
      body,
      author->{
        name
      },
      publishedAt,
      mainImage{
      asset->{
      url
      }
      },
      carModel->{
      title
      },
      
      carYear->{
      year
      },
        category->{
      title,
      slug
    }
    }`;
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    return [];
  }
}
