export default {
  de: {
    api: {
      alexa: {
        launch: {
          response: 'Ich höre...'
        },
        intent: {
          add: {
            success: 'Okay, ich habe {0} hinzugefügt!',
            alreadyExists: '{0} steht bereits auf der Liste.',
            failure: 'Es ist leider ein Problem aufgetreten!'
          },
          check: {
            true: 'Ja',
            false: 'Nein'
          },
          list: {
            single: '{0}',
            many: '{0} und {1}',
            none: 'Die Liste ist leer...'
          },
          stop: {
            response: 'Bis bald!'
          }
        }
      }
    }
  },
  en: {
    api: {
      alexa: {
        launch: {
          response: 'I\'m listening...'
        },
        intent: {
          add: {
            success: 'Okay, I\'ve added {0}!',
            alreadyExists: '{0} is already on the list.',
            failure: 'Sorry, there was a problem.'
          },
          check: {
            true: 'Yes',
            false: 'No'
          },
          list: {
            single: '{0}',
            many: '{0} and {1}',
            none: 'The list is empty...'
          },
          stop: {
            response: 'See you later!'
          }
        }
      }
    }
  }
}
