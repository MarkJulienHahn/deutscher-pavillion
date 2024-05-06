import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
        },
        {
          title: "SEO friendly file-name",
          name: "filename",
          type: "slug",
          isUnique: false,
          description: "Example: yael-bartana-deutscher-pavillon-2024",
        },
      ],
    },

    orderRankField({ type: "home" }),
  ],
});
