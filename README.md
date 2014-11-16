#Shopping list

Simple shopping list app based on [Meteor 1.0](https://www.meteor.com) to write things you need in a shared space so that it's available online and to the family or partner for example.

## Installation

* [Install Meteor](https://www.meteor.com/install) if you haven't yet.
* Checkout the Git repo with `$ git co https://github.com/robbash/shopping-list`
* Go to the project directory and simply start `$ meteor`.

## Customisation

There's not much at the moment, but I'm quite sure you want to customise the users.

Have a look at `server/users.sample.js`, customise it and rename it to `server/users.js` before you start your instance the first time.

(If you already did, start `$ meteor mongo` and delete the fake users with `db.users.remove({})`)

## Create your online shopping cart

You can easily deploy your instance to [meteor.com](https://www.meteor.com):

`$ meteor deploy <your-unique-subdomain>.meteor.com`

If your having your own domain and access to the DNS settings, you might want to use it (or a sub domain) for the shopping list. Just set up a CNAME entry to `<your-unique-subdomain>.meteor.com` in your (sub) domain's DNS settings and deploy the app to the CNAME. (It still goes to [meteor.com](https://www.meteor.com), but this way it's available under your domain.)