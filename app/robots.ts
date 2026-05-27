import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
        ],
      },

      {
        userAgent: "GPTBot",
        allow: "/",
      },

      {
        userAgent: "Google-Extended",
        allow: "/",
      },

      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],

    sitemap: "https://www.krishandev.com/sitemap.xml",

    host: "https://www.krishandev.com",
  };
}