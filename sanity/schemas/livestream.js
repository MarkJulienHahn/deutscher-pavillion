import { defineType } from "sanity";

export default defineType({
  name: "livestream",
  title: "Live Stream",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
    {
      name: "live",
      title: "Live",
      type: "boolean",
      description:
        "If this is set to true, the livestream will be visible online.",
    },
    {
      name: "embedID",
      title: "Embed-ID",
      type: "string",
      description:
        "The video ID will be located in the URL of the video page, right after the v= URL parameter",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
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
  ],
});
