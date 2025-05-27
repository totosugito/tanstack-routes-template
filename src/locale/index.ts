import id from "./id.ts"

const locales = [id];
export default locales;
export const languages = locales.map((locale) => locale.language);
export const embeddedLocales = locales.reduce(
  (result, locale) => ({
    ...result,
    [locale.language]: locale.embeddedLocale,
  }),
  {},
);
