import nextIntl from "next-intl/plugin";

const withNextIntl = nextIntl("./lib/i18n.ts");

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

export default withNextIntl(nextConfig);
