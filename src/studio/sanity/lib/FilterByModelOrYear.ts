
import { client } from "./client";

interface FilterParams {
  modelIds?: string[];
  minYear?: number;
  maxYear?: number;
}

interface Slug {
  current: string;
}

interface ImageAsset {
  url: string;
}

interface MainImage {
  asset: ImageAsset;
}

interface CarModel {
  title: string;
  year: number;
}

interface Category {
  title: string;
  slug: Slug;
}

export interface Post {
  title: string;
  slug: Slug;
  carModel?: CarModel;
  mainImage?: MainImage;
  category?: Category;
}

export async function filterPosts({
  modelIds,
  minYear,
  maxYear,
}: FilterParams): Promise<Post[]> {
  const query = `
  *[
    _type == "post" &&
    (
      !defined($modelIds) || count($modelIds) == 0 || carModel._ref in $modelIds
    ) &&
    (
      !defined($minYear) || !defined(carModel->year) || carModel->year >= $minYear
    ) &&
    (
      !defined($maxYear) || !defined(carModel->year) || carModel->year <= $maxYear
    )
  ]{
    title,
    slug,
    carModel->{
      title,
      year
    },
    mainImage { asset->{ url } },
    category->{ title, slug },
    publishedAt,
    body
  }
`;

  const params: Record<string, unknown> = {};
  if (Array.isArray(modelIds) && modelIds.length > 0) {
    params.modelIds = modelIds;
  }
  if (typeof minYear === "number") {
    params.minYear = minYear;
  }
  if (typeof maxYear === "number") {
    params.maxYear = maxYear;
  }

  return await client.fetch(query, params);
}
