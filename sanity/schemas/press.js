import { defineType } from "sanity";

export default defineType({
  name: "press",
  title: "Press",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
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
              title: "File",
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
    {
      name: "dates",
      title: "Press Dates",
      type: "array",
      of: [
        {
          name: "entry",
          title: "Entry",
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "datetime",
            },
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
              name: "text",
              title: "Text",
              type: "object",
              fields: [
                {
                  name: "german",
                  title: "German",
                  type: "array",
                  validation: (Rule) => Rule.required(),
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
                  validation: (Rule) => Rule.required(),
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

          preview: {
            select: {
              title: "title.german",
            },
          },
        },
      ],
    },
    {
      name: "disclaimer",
      title: "Disclaimer",
      type: "object",

      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
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
      name: "pressContact",
      title: "Press Contact",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
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
      name: "pressDates",
      title: "Press Dates",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
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
      name: "accreditation",
      title: "Accreditation",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          validation: (Rule) => Rule.required(),
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
          validation: (Rule) => Rule.required(),
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
});
