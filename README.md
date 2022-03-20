# Product Watcher

It's a simple script that use Discord.js library to send webhooks in a discord server when Creatina from Growth Suplementos is available.

## Compatibility

- Linux
- Mac

## Installing

Rename ```example.env``` to ```.env``` and add your webhook link in ***DISCORD_WEBHOOK_URI***. To a guide for knowing how to get the webhook link. [Click Here](https://github.com/JVmano/product-watcher/wiki/How-to-get-a-webhook-link).


Using NPM:

```npm install```

Using YARN:

```yarn```

## Usage

To edit the product list you'll need to edit the ```ìndex.js``` file and for each product link that will be monitored you 'll need to call the function ```getProducts```
