import I18n from '../i18n'

class ItemsCollection extends Mongo.Collection {
  all(sort) {
    sort = sort || {sort: {checked: 1, important: -1, title_index: 1}}

    return this.find({}, sort);
  }
}

Items = new ItemsCollection('items');

Items.allow({
  update: function(userId, item) {
    return userId;
  },
  remove: function(userId, item) {
    return userId;
  },
});

Meteor.methods({
  itemInsert: function(itemAttributes) {
    check(Meteor.userId(), String);
    check(itemAttributes, {
      title: String,
      checked: Boolean
    });

    var user = Meteor.user();
    var item = itemWithDefaults(itemAttributes, user)
    var itemId = Items.insert(item);

    return {
      _id: itemId
    };
  }
});

const itemExists = function(title) {
  return !!Items.findOne({ title: { $regex: new RegExp('^' + title + '$', 'i') } })
}

const itemWithDefaults = function(itemAttributes, user) {
  return _.extend(itemAttributes, {
    userId: user ? user._id : -1,
    creator: user ? user.profile.first_name + ' ' + user.profile.last_name : 'api',
    title_index: itemAttributes.title.toLowerCase(),
    checked: false,
    important: false,
    submitted: new Date()
  })
}

if (Meteor.isServer) {

  // Global API configuration
  const Api = new Restivus({
    prettyJson: true
  });

  // Maps to: /api/articles/:id
  Api.addRoute('alexa', { authRequired: false }, {
    post() {
      const request = this.bodyParams.request
      const response = {
        version: '1.0',
        response: {
          shouldEndSession: false,
          outputSpeech: {
            type: 'PlainText'
          }
        }
      }

      I18n.setLocale(request.locale, 'en')

      if (request.type === 'LaunchRequest') {
        response.response.outputSpeech.text = I18n.t('api.alexa.launch.response')

      } else if (request.type === 'IntentRequest') {
        const intent = request.intent

        switch (intent.name) {
          case 'ROBBASH_add':
            const item = itemWithDefaults({
              title: intent.slots.item.value.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }),
              checked: false
            })

            if (itemExists(item.title)) {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.add.alreadyExists', item.title)
            } else if (Items.insert(item)) {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.add.success', item.title)
            } else {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.add.failure')
            }

            break;
          case 'ROBBASH_list':
            const items = Items.all().fetch().map(item => item.title)

            if (items.length > 1) {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.list.many', items.slice(0, -1).join(', '), items.slice(-1))
            } else if (items.length > 0) {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.list.single', items[0])
            } else {
              response.response.outputSpeech.text = I18n.t('api.alexa.intent.list.failure')
            }

            break;
          case 'ROBBASH_check':
            const found = itemExists(intent.slots.item.value)

            response.response.outputSpeech.text = I18n.t(`api.alexa.intent.check.${found ? 'true' : 'false'}`)

            break;
          case 'AMAZON.StopIntent':
          default:
            response.response.outputSpeech.text = I18n.t('api.alexa.intent.stop.response')
            response.response.shouldEndSession = true
        }
      }

      return response
    }
  });
}
