import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",

  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
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
          name: "english",
          title: "English",
          type: "string",
          validation: (Rule) => Rule.required(),
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
      name: "names",
      title: "Names",
      type: "array",
      of: [
        {
          name: "entry",
          title: "Entry",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "nameEnglish",
              title: "Name English",
              type: "string",
            },
            { name: "url", title: "Url", type: "url" },
          ],
        },
      ],
    },

    orderRankField({ type: "team" }),
  ],
  preview: {
    select: {
      title: "headline.german",
    },
  },
});
