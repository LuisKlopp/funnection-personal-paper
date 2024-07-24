module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elio-bucket-s3.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_S3_BASE_URL: process.env.NEXT_PUBLIC_S3_BASE_URL,
  },
};
