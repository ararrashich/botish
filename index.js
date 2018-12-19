const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '694628895:AAHsQczE9ON9jj7VFnmvMdgKKQmYkT1hvOU'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('messege', msg => {
 bot.sendMessege(msg.chat.id, `Hello from bot, bot says:"Hi, ${msg.from.first_name} "`)
})