```js
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = '8816785125:AAEyWLNd49Aoyxjqo_-1fdhj-NuVu_WU_Kw';

const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true,
        params: {
            timeout: 10
        }
    }
});

// Express server for Render
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is running!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Random code generator
function generateCode() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';

    let result = '';

    // 3 uppercase letters
    for (let i = 0; i < 3; i++) {
        result += upper.charAt(Math.floor(Math.random() * upper.length));
    }

    // 3 lowercase letters
    for (let i = 0; i < 3; i++) {
        result += lower.charAt(Math.floor(Math.random() * lower.length));
    }

    // 2 numbers
    for (let i = 0; i < 2; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Shuffle the code
    result = result
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    return result;
}

// Start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        '🎲 Welcome!\n\nUse /generate to create a random code.'
    );
});

// Generate command
bot.onText(/\/generate/, (msg) => {
    const code = generateCode();

    bot.sendMessage(
        msg.chat.id,
        `🎲 Your Random Code:\n${code}`
    );
});

console.log('Bot is running...');
```
