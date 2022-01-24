// We need to append the repo name to the assets so that the CSS and images are served correctly
const isInCI = "GITHUB_REPOSITORY" in process.env;
const assetPrefix = isInCI ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/` : "./"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix
}

module.exports = nextConfig
