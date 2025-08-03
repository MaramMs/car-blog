import type { StructureResolver } from "sanity/structure";
import { DocumentIcon, TagIcon, UserIcon, CogIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      // POSTS
      S.listItem()
        .title("All Posts")
        .icon(DocumentIcon)
        .child(S.documentTypeList("post").title("All Posts")),
      S.listItem()
        .title("Published Posts")
        .icon(DocumentIcon)
        .child(
          S.documentTypeList("post")
            .title("Published Posts")
            .filter('_type == "post" && defined(publishedAt)')
        ),
      S.listItem()
        .title("Draft Posts")
        .icon(DocumentIcon)
        .child(
          S.documentTypeList("post")
            .title("Draft Posts")
            .filter('_type == "post" && !defined(publishedAt)')
        ),

      S.divider(),

      // CATEGORIES
      S.listItem()
        .title("All Categories")
        .icon(TagIcon)
        .child(S.documentTypeList("category").title("All Categories")),

      S.listItem()
        .title("Published Categories")
        .icon(TagIcon)
        .child(
          S.documentTypeList("category")
            .title("Published Categories")
            .filter('_type == "category" && defined(publishedAt)')
        ),

      S.listItem()
        .title("Draft Categories")
        .icon(TagIcon)
        .child(
          S.documentTypeList("category")
            .title("Draft Categories")
            .filter('_type == "category" && !defined(publishedAt)')
        ),

      S.divider(),
      // CAR MODELS
      S.listItem()
        .title("Car Models")
        .icon(CogIcon)
        .child(S.documentTypeList("carModel").title("Car Models")),

      // CAR YEARS
      S.listItem()
        .title("Car Years")
        .icon(CogIcon)
        .child(S.documentTypeList("carYear").title("Car Years")),

      S.divider(),
      S.listItem()
        .title("Services")
        .icon(CogIcon)
        .child(S.documentTypeList("services").title("services")),

      S.divider(),
      S.listItem()
        .title("Clients")
        .icon(CogIcon)
        .child(S.documentTypeList("clients").title("Clients")),

      S.divider(),

      S.documentTypeListItem("author").title("Authors"),

      ...S.documentTypeListItems().filter(
        (item) =>
          !["post", "category", "author", "clients" , 'services'].includes(
            item.getId() ?? ""
          )
      ),
    ]);
