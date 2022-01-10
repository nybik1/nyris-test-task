const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/svg"),
  reactStrictMode: true,
  images: {
    domains: ["img.nyris.io"]
  },
  webpack(config, options) {
    return config;
  }
});
