import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export default defineType({
  name: "program",
  title: "Program",
  type: "document",

  fields: [
    {
      title: "Startpage",
      name: "startpage",
      type: "boolean",
      description:
        "If this is active, the post will be shown on the startpage.",
    },
    {
      name: "textBig",
      title: "Text Big",
      type: "object",

      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          description: `Für Interne Links, hier bitte die Sub-Page inkl. Sprachkürzel und Schrägstriche eintragen, Beispiel: »/de/yael-bartana«`,
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
          description: `Für Interne Links, hier bitte die Sub-Page inkl. Sprachkürzel und Schrägstriche eintragen, Beispiel: »/de/yael-bartana«`,
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
      name: "textSmall",
      title: "Text Small",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "array",
          description: `Für Interne Links, hier bitte die Sub-Page inkl. Sprachkürzel und Schrägstriche eintragen, Beispiel: »/de/yael-bartana«`,
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
          description: `Für Interne Links, hier bitte die Sub-Page inkl. Sprachkürzel und Schrägstriche eintragen, Beispiel: »/de/yael-bartana«`,
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
      title: "Location",
      name: "location",
      type: "string",
      options: {
        list: [
          { title: "German Pavillon", value: "German Pavillon" },
          { title: "La Certosa", value: "La Certosa" },
        ],
        layout: "radio",
        direction: "vertical",
      },
    },

    orderRankField({ type: "home" }),
  ],
});
