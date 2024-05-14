import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "home",
        title: "Home",
        S,
        context,
      }),

      S.divider(),

      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),

      orderableDocumentListDeskItem({
        type: "program",
        title: "Program",
        S,
        context,
      }),

      // S.listItem()
      //   .title("Livestream")
      //   .id("livestream")
      //   .child(S.document().schemaType("livestream").documentId("livestream")),

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

      // S.listItem()
      //   .title("Künstler:innen Portraits")
      //   .id("artistImages")
      //   .child(
      //     S.document().schemaType("artistImages").documentId("artistImages")
      //   ),

      orderableDocumentListDeskItem({
        type: "artists",
        title: "Künstler:innen",
        S,
        context,
      }),

      S.listItem()
        .title("Kuratorisches Konzept")
        .id("curatorialConcept")
        .child(
          S.document().schemaType("curatorialConcept").documentId("curatorialConcept")
        ),

      S.listItem()
        .title("Chroniclers Intro")
        .id("chroniclesIntro")
        .child(
          S.document()
            .schemaType("chroniclesIntro")
            .documentId("chroniclesIntro")
        ),

      orderableDocumentListDeskItem({
        type: "chronicles",
        title: "Chroniclers",
        S,
        context,
      }),

      S.listItem()
        .title("Special")
        .id("special")
        .child(S.document().schemaType("special").documentId("special")),

      S.divider(),

      // orderableDocumentListDeskItem({
      //   type: "programPavillon",
      //   title: "Programm | Deutscher Pavillon",
      //   S,
      //   context,
      // }),

      // orderableDocumentListDeskItem({
      //   type: "programCertosa",
      //   title: "Programm | Certosa",
      //   S,
      //   context,
      // }),

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
