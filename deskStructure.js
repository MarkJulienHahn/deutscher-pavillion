import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Impressum")
        .id("impressum")
        .child(S.document().schemaType("impressum").documentId("impressum")),
    ]);
