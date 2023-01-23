const { default: axios } = require('axios');
const { Telegraf } = require('telegraf');
const { Token } = require('./config')


const bot = new Telegraf(Token);

bot.start((ctx) => ctx.reply('Welcome to the new bot of Coding'));

bot.command('reverseString', async function(ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/harilalc666/questons-on-array/master/reverseSentence.js');

    return ctx.reply(response.data);
})

bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.on('emoji', (ctx) => ctx.reply('👍'));
bot.launch();

