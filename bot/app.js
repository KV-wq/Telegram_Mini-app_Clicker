import { Telegraf, Markup } from "telegraf";

const token = "7647750973:AAHURgvgRwNRZMd4xKaU5ChUD2OaN4e7OyQ";
const webUrl = "https://kv-clicker.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Press to start clicker",
    Markup.inlineKeyboard([
      Markup.button.webApp("Open mini-app 🔥", `${webUrl}?ref=${ctx.payload}`),
    ])
  );
});

bot.launch();
