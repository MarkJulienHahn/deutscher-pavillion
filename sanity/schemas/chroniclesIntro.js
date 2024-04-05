import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "chroniclesIntro",
  title: "Chroniclers Intro",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      hidden: true,
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
