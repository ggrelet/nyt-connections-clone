/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    basePath: "/nyt-connections-clone",
    assetPrefix: "/nyt-connections-clone/",
};

export default nextConfig;
