import { defineType } from "sanity";

export default defineType({
  name: "dank",
  title: "Dank",
  type: "document",

  fields: [
    { name: "title", title: "Title", type: "string", hidden: true },
    // {name: "biennaleLogo", title: "Biennale Logo", type: "image" },
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
      name: "initialPartner",
      title: "Initialpartner",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [{ name: "logo", title: "Logo", type: "image" }],
        },
      ],
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
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [{ name: "logo", title: "Logo", type: "image" }],
        },
      ],
    },
    {
      name: "supporter",
      title: "Supporter",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [{ name: "logo", title: "Logo", type: "image" }],
        },
      ],
    },
    {
      name: "cooperation",
      title: "Cooperation",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "logos",
          title: "Logos",
          type: "array",
          of: [{ name: "logo", title: "Logo", type: "image" }],
        },
      ],
    },
    {
      name: "thanks",
      title: "Thanks",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "entry",
          title: "Eintrag",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "lenders",
      title: "Lenders",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "entry",
          title: "Eintrag",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "special",
      title: "Special Thanks",
      type: "object",
      fields: [
        {
          name: "german",
          title: "German",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
        {
          name: "english",
          title: "English",
          type: "object",
          fields: [{ name: "headline", title: "Headline", type: "string" }],
        },
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
  ],
});
