import I18n from '../lib/i18n'

Accounts.config({
   loginExpirationInDays: null
})

if (Version.find().count() > 0) {
  Version.remove({})
}
Version.insert(JSON.parse(Assets.getText('version.json')))
