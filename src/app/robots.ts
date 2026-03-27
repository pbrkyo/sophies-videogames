import { MetadataRoute } from "next";

const siteUrl = "https://sophiesvideogames.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/checkout/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
