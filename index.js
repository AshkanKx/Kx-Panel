const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN_BOT;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,

"👋 Welcome To KX Panel\n\nبرای ادامه یکی از گزینه‌ها رو انتخاب کن.",

{

reply_markup: {

keyboard: [

["📥 Download Panels"],

["🎯 Sensitivity","📺 YouTube"],

["📢 Telegram","👤 Support"]

],

resize_keyboard:true

}

});

});

bot.on("message",(msg)=>{

const chatId=msg.chat.id;

switch(msg.text){

case "📥 Download Panels":

bot.sendMessage(chatId,"📂 هنوز پنل‌ها اضافه نشدن 😈");

break;

case "🎯 Sensitivity":

bot.sendMessage(chatId,"🎯 به زودی سنس‌ها اضافه میشن.");

break;

case "📺 YouTube":

bot.sendMessage(chatId,"https://youtube.com/@AshkanKx");

break;

case "📢 Telegram":

bot.sendMessage(chatId,"لینک کانال تلگرام");

break;

case "👤 Support":

bot.sendMessage(chatId,"با آیدی @AshkanKx در ارتباط باش.");

break;

}

});
