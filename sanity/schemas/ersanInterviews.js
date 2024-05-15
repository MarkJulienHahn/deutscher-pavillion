import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "ersanInterviews",
  title: "Ersan Mondtag Interviews",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title German",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
    },

    {
      name: "titleEn",
      title: "Title English",
      type: "string",
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
        source: "title",
      },
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
              styles: [
                { title: "Normal", value: "normal" },
                { title: "Center", value: "center" }
              ],
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
              styles: [
                { title: "Normal", value: "normal" },
                { title: "Center", value: "center" }
              ],
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
