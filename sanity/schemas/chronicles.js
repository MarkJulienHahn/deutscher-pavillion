import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "chronicles",
  title: "Chroniclers",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },
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
    {
      name: "introText",
      title: "Intro Text",
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

    orderRankField({ type: "chronicles" }),
  ],
});
