import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "nl"] as const;
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../locale/${locale}.json`)).default,
}));
