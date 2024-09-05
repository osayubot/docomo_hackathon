/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rental.kikito.docomo.ne.jp",
      },
      {
        protocol: "https",
        hostname: "contents.kikito.docomo.ne.jp",
      },
    ],
  },
};

export default nextConfig;
