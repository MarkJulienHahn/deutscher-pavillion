import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "curatorialConcept",
  title: "Kuratorisches Konzept",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          name: "de",
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
          name: "en",
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
      name: "portrait",
      title: "Portrait",
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
      name: "biography",
      title: "Biography",
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
      name: "info",
      title: "Info",
      type: "array",
      of: [
        {
          name: "work",
          title: "Work",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "title",
              },
            },

            {
              name: "text",
              title: "Text",
              type: "object",
              fields: [
                {
                  name: "de",
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
                  name: "en",
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
          ],
        },
      ],
    },

    orderRankField({ type: "curators" }),
  ],
});
