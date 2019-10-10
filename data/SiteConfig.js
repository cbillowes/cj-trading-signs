const config = {
  siteTitle: "Printing | CJ Trading & Signs | Springs", // Site title.
  siteTitleShort: "CJ Trading & Signs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "CJ Trading & Signs", // Alternative site title for SEO.
  siteLogo: "logo-512x512.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.cj-trading-signs.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "CJ Trading & Signs for all your printing needs", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Printing", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/CJ.McAughey/?eid=ARBGrQnsG6W76wyaBwuCPbK_DVtFonPCAx9Odej8ZcBw_RogbTIdzTIhHkQ_8ZZXOMHvHwDyQhJzsS3K",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Call now",
      url: "tel:+27672594314",
      iconClassName: "fa fa-phone-alt"
    },,
    {
      label: "Whatsapp",
      url: "tel:+27833891553",
      iconClassName: "fab fa-whatsapp"
    },
    {
      label: "Email",
      url: "mailto:cj.trading.signs@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. CJ Trading & Signs", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#38b6ff", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
