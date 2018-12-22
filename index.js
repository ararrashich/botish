const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '727077862:AAFgOLfmrN5bKr58VHYdyBVx_lGqnsBCgkk'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('messege', msg => {
    bot.sendMessege(msg.chat.id, `URAAAAAAAAA:"UR, ${msg.from.first_name} "`)
})
