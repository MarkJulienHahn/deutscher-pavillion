import { defineType } from "sanity";

export default defineType({
  name: "dank",
  title: "Dank",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
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
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ name: "logo", title: "Logo", type: "image" }],
    },
    {
      name: "partner",
      title: "Partner",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [
            { name: "headline", title: "Headline", type: "string" },
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
            { name: "headline", title: "Headline", type: "string" },
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
      ],
    },
  ],
});
