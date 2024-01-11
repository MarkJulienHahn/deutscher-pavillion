import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "newsletter",
  title: "Newsletter",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },

    {
      name: "german",
      title: "Disclaimer German",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "english",
      title: "Disclaimer English",
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
      validation: (Rule) => Rule.required(),
    },
  ],
});
