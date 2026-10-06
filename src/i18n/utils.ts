import plTranslations from './pl.json';
import enTranslations from './en.json';

export const languages = {
  pl: 'Polski',
  en: 'English',
};

export const defaultLang = 'pl';

export const ui = {
  pl: plTranslations,
  en: enTranslations,
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}