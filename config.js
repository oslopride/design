const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://design.oslopride.no/",
    gaTrackingId: null
  },
  header: {
    logo:
      "https://cdn.sanity.io/images/2ger3rla/prod2019/b3fba7f838b94613135cc39dec69cadae4b9bfd5-2000x2000.svg",
    logoLink: "https://design.oslopride.no/",
    title: "Design Guidelines",
    githubUrl: "https://github.com/oslopride/design",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    links: [{ text: "Oslo Pride", link: "https://www.oslopride.no/" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "Design Guidelines | Oslo Pride",
    description: "Documentation built with mdx",
    ogImage: null,
    docsLocation: "https://github.com/oslopride/design/blob/master/content",
    favicon:
      "https://cdn.sanity.io/images/2ger3rla/prod2019/b3fba7f838b94613135cc39dec69cadae4b9bfd5-2000x2000.svg"
  }
};

module.exports = config;
