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
    // {
    //   name: "image",
    //   title: "Image",
    //   type: "image",
    //   fields: [
    //     {
    //       title: "Alternative Text",
    //       name: "alt",
    //       type: "string",
    //     },
    //     {
    //       title: "SEO friendly file-name",
    //       name: "filename",
    //       type: "slug",
    //       isUnique: false,
    //       description: "Example: yael-bartana-deutscher-pavillon-2024",
    //     },
    //   ],
    // },
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

    orderRankField({ type: "artists" }),
  ],
});
