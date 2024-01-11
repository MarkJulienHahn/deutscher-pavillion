import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "visit",
  title: "Visit",
  type: "document",

  fields: [
    {
      name: "german",
      title: "German",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (Rule) => Rule.required().min(3).max(80),
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          description:
            "Please enter a URL here if the headline is supposed to be a link",
        },
        {
          name: "text",
          title: "Text",
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
      name: "english",
      title: "English",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          validation: (Rule) => Rule.required().min(3).max(80),
        },
        {
          name: "url",
          title: "URL",
          type: "url",
          description:
            "Please enter a URL here if the headline is supposed to be a link",
        },
        {
          name: "text",
          title: "Text",
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

    orderRankField({ type: "team" }),
  ],
  preview: {
    select: {
      title: "german.headline",
    },
  },
});
