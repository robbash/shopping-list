# Shopping list

Simple shopping list app based on [Meteor 1.0](https://www.meteor.com) to write
things you need in a shared space so that it's available online and to the
family or partner for example.

## Verion 0.3 - breaking changes

Meteor was updated from 1.1 to 1.8. This also requires an update of MongoDB.
Make sure you [backup your database before updating](https://stackoverflow.com/a/22201759/840238),
and restore after updated your MongoDB instance. (In development, if you don't
mind, just run `$ meteor reset` inside your project folder.)

### Alexa Skills interface

The new version implements a basic interface to interact with Alexa, though
language output is currently only in German and I haven't published the Alexa
Skill configuration.

### TODO

* Alexa Skill verification ([PHP example
here](https://philipp-guttmann.de/Blog/Alexa_Skill_Endpoint_PHP/))

## Installation

* [Install Meteor](https://www.meteor.com/install) if you haven't yet.
* Checkout the Git repo with `$ git clone https://github.com/robbash/shopping-list`
* Go to the project directory and simply start `$ meteor`.

## Customisation

### Users

There's not much at the moment, but I'm quite sure you want to customise the
users.

Have a look at `server/users.sample.js`, customise it and rename it to
`server/users.js` before you start your instance the first time.

(If you already did, start `$ meteor mongo` and delete the fake users with
`db.users.remove({})` or simply reset the instance with `$ meteor reset`.)

### I18n

While the interface is all English language, the Alexa API responses can match
your Alexa language. The Alexa Skill query specifies the current language, which
is used to respond. Currently I've provided English and German, but it's easy
to add more translations via `lib/locales.js`.

## Create your online shopping cart

You can easily deploy your instance to [meteor.com](https://www.meteor.com):

`$ meteor deploy <your-unique-subdomain>.meteor.com`

If your having your own domain and access to the DNS settings, you might want to
use it (or a sub domain) for the shopping list. Just set up a CNAME entry to
`<your-unique-subdomain>.meteor.com` in your (sub) domain's DNS settings and
deploy the app to the CNAME. (It still goes to
[meteor.com](https://www.meteor.com), but this way it's available under your
domain.)

## Amazon Alexa integration

Please refer to the [Alexa Skill docs](ALEXA.md) for details on how to use the
shopping list with an Alexa device.
