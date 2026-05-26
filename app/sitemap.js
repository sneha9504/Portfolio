export default function sitemap() {
  const base = "https://sneha-wani.netlify.app";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
