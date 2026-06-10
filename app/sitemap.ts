import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
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

  const industryRoutes = industries.map((industry) => ({
    url: `${site.url}/industries/${industry.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...industryRoutes];
}
