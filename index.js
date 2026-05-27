const TelegramBot = require('node-telegram-bot-api');

const token = '8816785125:AAEyWLNd49Aoyxjqo_-1fdhj-NuVu_WU_Kw';

const bot = new TelegramBot(token, { polling: true });

function generateCode() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    let result = '';

    // 3 uppercase
    for (let i = 0; i < 3; i++) {
        result += upper.charAt(Math.floor(Math.random() * upper.length));
    }

    // 3 lowercase
    for (let i = 0; i < 3; i++) {
        result += lower.charAt(Math.floor(Math.random() * lower.length));
    }

    // 2 numbers
    for (let i = 0; i < 2; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Shuffle characters
    result = result.split('').sort(() => Math.random() - 0.5).join('');

    return result;
}

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Send /generate to create random code.');
});

bot.onText(/\/generate/, (msg) => {
    const code = generateCode();
    bot.sendMessage(msg.chat.id, `Generated Code: ${code}`);
});

console.log('Bot is running...');
