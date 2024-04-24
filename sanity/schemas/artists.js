import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "artists",
  title: "Artists",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required().warning(
          "Please make sure there is a valid Slug by pressing GENERATE"
        ),
      options: {
        source: "name",
      },
    },
    { name: "certosa", title: "La Certosa", type: "boolean" },
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
      name: "works",
      title: "Works",
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
              name: "medium",
              title: "Medium",
              type: "object",
              fields: [
                { name: "en", title: "English", type: "string" },
                { name: "de", title: "German", type: "string" },
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
                      title: "Caption",
                      name: "caption",
                      type: "object",
                      fields: [
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
                      description:
                        "Example: yael-bartana-deutscher-pavillon-2024",
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




    // {
    //   name: "artworkTitle",
    //   title: "Artwork Title",
    //   type: "string",
    // },

    // {
    //   name: "medium",
    //   title: "Medium",
    //   type: "object",
    //   fields: [
    //     {
    //       name: "text",
    //       title: "Text",
    //       type: "array",
    //       of: [
    //         {
    //           type: "block",
    //           styles: [{ title: "Normal", value: "normal" }],
    //           lists: [],
    //           marks: {
    //             decorators: [{ title: "Emphasis", value: "em" }],
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   name: "artworkText",
    //   title: "Artwork Text",
    //   type: "object",
    //   fields: [
    //     {
    //       name: "textGerman",
    //       title: "German",
    //       type: "array",
    //       of: [
    //         {
    //           type: "block",
    //           styles: [{ title: "Normal", value: "normal" }],
    //           lists: [],
    //           marks: {
    //             decorators: [{ title: "Emphasis", value: "em" }],
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       name: "textEnglish",
    //       title: "English",
    //       type: "array",
    //       of: [
    //         {
    //           type: "block",
    //           styles: [{ title: "Normal", value: "normal" }],
    //           lists: [],
    //           marks: {
    //             decorators: [{ title: "Emphasis", value: "em" }],
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },

    orderRankField({ type: "artists" }),
  ],
});
