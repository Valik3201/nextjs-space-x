/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "farm1.staticflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "farm4.staticflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "farm5.staticflickr.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "farm6.staticflickr.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
