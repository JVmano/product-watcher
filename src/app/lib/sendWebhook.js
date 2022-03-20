const { MessageEmbed, WebhookClient } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

const webhookClient = new WebhookClient({
  url: process.env.DISCORD_WEBHOOK_URI // usar env
})

const sendDiscordWebhook = (name, image, link) => {
  const embed = new MessageEmbed()
    .setColor('#ff5c82')
    .setTitle(name)
    .setThumbnail(image)
    .setURL(link)
    .setDescription('Produto em estoque!')

  webhookClient.send({
    embeds: [embed]
  })
}

module.exports = { sendDiscordWebhook }
