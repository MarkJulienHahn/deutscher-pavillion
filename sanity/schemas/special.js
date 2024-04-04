import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "special",
  title: "Special",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
    {
      name: "headline",
      title: "Headline",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "string",
        },
        {
          name: "english",
          title: "English",
          type: "string",
        },
      ],
    },

    {
      name: "text",
      title: "Text",
      type: "object",
      fields: [
        {
          name: "textGerman",
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
          name: "textEnglish",
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
              description: "Example: yael-bartana-deutscher-pavillon-2024",
            },
          ],
        },
      ],
    },
    orderRankField({ type: "chronicles" }),
  ],
});
