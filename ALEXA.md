# Alexa Skill

This is a very simple Alexa Skill configuration that you can setup to use your
Alexa echo or similar with this shopping list app.

The skill is neither deployed nor certified. It's only in _development_ and you
need to setup the skill yourself in order to use it with your custom instance of
this meteor app.

## Create your own skill

Log into the [Alexa Developer Console](https://developer.amazon.com/alexa) with
the same account that your Alexa device is registered with. If that's not
possible, you need to re-register your device to be able to use this skill.

After logging in, create an Alexa skill. Name it as you want.

On the _Build_ tab, choose the language settings to setup languages you want to
support. For each language you can now create your _Invocations_ and _Intent_.
You need to name the _Intents_ a certain way to match them in the meteor app.
Please see these example configurations, and use them if you want. Just copy
them to the JSON editor in the _Interaction model_ section.

*English*

```JSON
{
    "interactionModel": {
        "languageModel": {
            "invocationName": "my shoppinglist",
            "intents": [
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": [
                        "ok",
                        "end",
                        "thanks",
                        "thank you"
                    ]
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "ROBBASH_add",
                    "slots": [
                        {
                            "name": "item",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "Add {item}",
                        "Add {item} to the list",
                        "Put {item}",
                        "Put {item} on the list",
                        "We need {item}"
                    ]
                },
                {
                    "name": "ROBBASH_list",
                    "slots": [],
                    "samples": [
                        "read the list",
                        "what's on the list",
                        "list all items"
                    ]
                },
                {
                    "name": "ROBBASH_check",
                    "slots": [
                        {
                            "name": "item",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "is {item} on the list",
                        "do we have {item} on the list"
                    ]
                }
            ],
            "types": []
        }
    }
}
```

*German*

```JSON
{
    "interactionModel": {
        "languageModel": {
            "invocationName": "meinen einkaufszettel",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": [
                        "ok",
                        "ende",
                        "danke"
                    ]
                },
                {
                    "name": "ROBBASH_add",
                    "slots": [
                        {
                            "name": "item",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "Füge {item} hinzu",
                        "Schreib {item} auf",
                        "Nimm {item} auf",
                        "Pack {item} auf die Liste",
                        "Wir brauchen {item}",
                        "Pack {item} auf die Shopping-Liste",
                        "Schreib {item} auf die Liste"
                    ]
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "ROBBASH_list",
                    "slots": [],
                    "samples": [
                        "lies mir den zettel vor",
                        "was ist auf dem zettel",
                        "auflistung",
                        "was ist auf der liste",
                        "lies mir die liste vor"
                    ]
                },
                {
                    "name": "ROBBASH_check",
                    "slots": [
                        {
                            "name": "item",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "haben wir schon {item} auf dem zettel",
                        "haben wir {item} schon auf dem zettel",
                        "haben wir {item} schon auf der liste",
                        "haben wir schon {item} auf der liste",
                        "steht {item} schon auf dem zettel",
                        "steht {item} auf dem zettel",
                        "haben wir {item} auf der liste",
                        "steht {item} auf der liste"
                    ]
                }
            ],
            "types": []
        }
    }
}
```

## Set your endpoint

Alexa needs to know where to set its requests to. You can set your endpoint -
the URL your shopping list meteor app is running - in the _Endpoint_ section.
Make sure you have a valid SSL certificate. (If you don't,
[Let's encrypt](https://letsencrypt.org) is your friend.)
