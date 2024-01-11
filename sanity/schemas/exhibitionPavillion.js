import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "exhibitionPavillion",
  title: "Exhibition | Deutscher Pavillion",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "artists",
      title: "artists",
      type: "array",
      of: [
        {
          name: "artist",
          title: "artist",
          type: "reference",
          to: [{ type: "artists" }],
        },
      ],
    },

    {
      name: "text",
      title: "Text",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Emphasis", value: "em" }],
              },
            },
          ],
        },
        {
          name: "english",
          title: "English",
          type: "array",
          of: [
            {
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
              marks: {
                decorators: [{ title: "Emphasis", value: "em" }],
              },
            },
          ],
        },
      ],
    },

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              title: "Caption",
              name: "caption",
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
              description: "Example: yael-bartana-deutscher-pavillion-2024",
            },
          ],
        },
      ],
    },

    orderRankField({ type: "exhibitionPavillion" }),
  ],
});
