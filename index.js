const TelegramBot = require("node-telegram-bot-api"),
      config = require("./config.json"),
      bot = new TelegramBot(config.token, {
    polling: !0
});
require("./lib/handleCommand.js")(bot);
const express = require("express"),
      cors = require("cors");
var cron = require("node-cron");
const chalk = require("chalk");
var axios = require("axios");
console.clear(), console.log(chalk.green("[ BOT ] : ") + chalk.white("Bot đã khởi động!")), console.log(chalk.green("[ AUTHOR ] : ") + chalk.white("Thiệu Trung Kiên")), console.log(chalk.green("[ EMAIL ] : ") + chalk.white("ttk.trungkien333@gmail.com")), console.log(chalk.green("[ GITHUB ] : ") + chalk.white("TrunqKj3n")), console.log(chalk.green("[ TELEGRAM ] : ") + chalk.white("@thieutrungkien")), console.log(chalk.green("[ FACEBOOK ] : ") + chalk.white("https://www.facebook.com/ThieuTrungKien.Profile")), console.log(chalk.white("-----------------------------------------------------\n"));
const app = express();
bot.onText(/\/start/, msg => {
    console.log(chalk.white("[ MODULE ] : ") + chalk.green(`${ msg.from.first_name } ${ msg.from.last_name }`) + chalk.yellow(` ${ msg.text }`)), bot.sendMessage(msg.chat.id, "Chào mừng bạn đến với Kaguya!\n\nĐể sử dụng Kaguya, hãy gõ vào câu lệnh bên dưới:\n/help - Hiển thị danh sách các câu lệnh có sẵn\n/echo - Lặp lại tin nhắn của bạn!");
}), app.use(cors());
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }`)), app.get("/", (req, res) => res.send("Hello World!")), bot.getMe().then(data => {
    console.log("Đăng nhập thành công với tài khoản bot: " + data.username);
});
