import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "artistImages",
  title: "Artist Images",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      hidden: true,
    },

    {
      name: "imageLeft",
      title: "Image Left",
      type: "image",
      fields: [
        {
          title: "Captions",
          name: "captions",
          type: "object",
          fields: [
            { title: "German", name: "german", type: "string" },
            { title: "English", name: "english", type: "string" },
          ],
        },

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

    {
      name: "imageRight",
      title: "Image Right",
      type: "image",
      fields: [
        {
          title: "Captions",
          name: "captions",
          type: "object",
          fields: [
            { title: "German", name: "german", type: "string" },
            { title: "English", name: "english", type: "string" },
          ],
        },
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
  ],
});
