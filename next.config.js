/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["edamam-product-images.s3.amazonaws.com", "www.edamam.com"],
  },
};

module.exports = nextConfig;
