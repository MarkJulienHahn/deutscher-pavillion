import { defineType } from "sanity";

export default defineType({
  name: "impressum",
  title: "Impressum",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true
    },
    {
      name: "impressum",
      title: "Impressum",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
          ],
          lists: [],
          marks: {
            decorators: [{ title: "Emphasis", value: "em" }],
          },
        },
      ],
    },
  ],
});
