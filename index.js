const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "سلام داش 😎 ربات با موفقیت روشن شد!"
  );
});
