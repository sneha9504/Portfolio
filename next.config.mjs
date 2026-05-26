/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
