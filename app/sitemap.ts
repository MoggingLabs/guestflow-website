import type { MetadataRoute } from "next";
import { industrySlugs } from "@/content/industries";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/industries",
    "/pricing",
    "/about",
    "/book-a-demo",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/book-a-demo" ? 0.9 : 0.7,
  }));

  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${site.url}/industries/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...industryRoutes];
}
