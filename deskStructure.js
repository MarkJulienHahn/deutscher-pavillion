import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),

      S.divider(),

      orderableDocumentListDeskItem({
        type: "exhibitionPavillon",
        title: "Ausstellung | Deutscher Pavillon",
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "exhibitionCertosa",
        title: "Ausstellung | La Certosa",
        S,
        context,
      }),

      S.divider(),

      S.listItem()
        .title("Künstler:innen Portraits")
        .id("artistImages")
        .child(
          S.document().schemaType("artistImages").documentId("artistImages")
        ),

      orderableDocumentListDeskItem({
        type: "artists",
        title: "Künstler:innen",
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: "curators",
        title: "Kuratorin",
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: "chronicles",
        title: "Chronicles",
        S,
        context,
      }),

      S.divider(),

      orderableDocumentListDeskItem({
        type: "programPavillon",
        title: "Programm | Deutscher Pavillon",
        S,
        context,
      }),

      orderableDocumentListDeskItem({
        type: "programCertosa",
        title: "Programm | Certosa",
        S,
        context,
      }),

      S.divider(),

      orderableDocumentListDeskItem({
        type: "visit",
        title: "Besuch",
        S,
        context,
      }),
      S.listItem()
        .title("Presse")
        .id("press")
        .child(S.document().schemaType("press").documentId("press")),

      orderableDocumentListDeskItem({
        type: "team",
        title: "Team",
        S,
        context,
      }),
      S.listItem()
        .title("Dank")
        .id("dank")
        .child(S.document().schemaType("dank").documentId("dank")),

      S.divider(),

      S.listItem()
        .title("Newsletter")
        .id("newsletter")
        .child(S.document().schemaType("newsletter").documentId("newsletter")),

      S.divider(),

      S.listItem()
        .title("Datenschutz")
        .id("privacy")
        .child(S.document().schemaType("privacy").documentId("privacy")),
      S.listItem()
        .title("Impressum")
        .id("imprint")
        .child(S.document().schemaType("imprint").documentId("imprint")),
    ]);
