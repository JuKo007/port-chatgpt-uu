import { Translatable } from './types'

export function translate (translatable: Translatable | string, locale: string): string {
  if (typeof translatable === 'string') return translatable
  const defaultLocale1: string = 'nl'
  const defaultLocale2: string = 'en'
  const defaultLocale3: string = 'de'
  return translatable[locale] ?? translatable[defaultLocale1] ?? translatable[defaultLocale2] ?? translatable[defaultLocale3] ?? '[missing translation]'
}

export function getTranslations (translatables: Record<string, Translatable>, locale: string): Record<string, string> {
  const translated: Record<string, string> = {}
  for (const [key, value] of Object.entries(translatables)) {
    translated[key] = translate(value, locale)
  }
  return translated
}
