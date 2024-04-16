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
    {
      name: "downloads",
      title: "Downloads",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            { name: "date", title: "date", type: "date" },
            {
              name: "title",
              title: "Title",
              type: "object",
              fields: [
                {
                  name: "german",
                  title: "German",
                  type: "string",
                  validation: (Rule) => Rule.required().min(3).max(80),
                },
                {
                  name: "english",
                  title: "English",
                  type: "string",
                  validation: (Rule) => Rule.required().min(3).max(80),
                },
              ],
            },
            {
              name: "file",
              title: "File German",
              type: "file",
            },
            {
              name: "fileEnglish",
              title: "File English",
              type: "file",
            },
          ],
          preview: {
            select: {
              title: "title.german",
            },
          },
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
