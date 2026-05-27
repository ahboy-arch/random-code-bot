const TelegramBot = require('node-telegram-bot-api');

const token = '8816785125:AAEyWLNd49Aoyxjqo_-1fdhj-NuVu_WU_Kw';

const bot = new TelegramBot(token, { polling: true });

function generateCode() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let code = '';

  for (let i = 0; i < 6; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  for (let i = 0; i < 2; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return code;
}

bot.onText(/\/code/, (msg) => {
  const chatId = msg.chat.id;
  const randomCode = generateCode();

  bot.sendMessage(chatId, `🎲 Your Random Code:\n${randomCode}`);
});

bot.on('message', (msg) => {
  if (msg.text !== '/code') {
    bot.sendMessage(msg.chat.id, 'Send /code to generate a random code.');
  }
});

console.log('Telegram bot is running...');