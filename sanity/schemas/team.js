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
          name: "english",
          title: "English",
          type: "string",
          validation: (Rule) => Rule.required(),
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
              validation: (Rule) => Rule.required(),
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
