import locales from './locales'

export default {
  locale: 'de',
  values: locales,
  setLocale(locale, fallback) {
    if (locale.length > 2) {
      locale = locale.substring(0, 2)
    }
    if (this.values[locale] === undefined) {
      locale = fallback || 'de'
    }
    this.locale = locale
  },
  t(key) {
    let value = this.values[this.locale]
    key.split('.').map(el => {
      value = value[el]
    })
    if (typeof(value) === 'string') {
      return value.format(...[...arguments].slice(1))
    }
    return key
  }
}
