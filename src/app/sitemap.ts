import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tripseekapp.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://tripseekapp.com/support", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://tripseekapp.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://tripseekapp.com/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://tripseekapp.com/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
