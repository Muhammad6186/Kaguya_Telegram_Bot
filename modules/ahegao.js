const axios = require("axios");
class Module{
    constructor(name, run, description){
        this.name = name;
        this.run = run;
        this.description = description;
    }
    async ahegao(bot, msg, match){
        const res = await axios.get('https://nguyenmanh.name.vn/api/nsfw/ahegao?apikey=X7qFMoKB')
        bot.sendPhoto(msg.chat.id, res.data.url, {
            caption: "Your Image"
        });
    }
}
module.exports = new Module("ahegao", Module.prototype.ahegao, "Hiển thị ảnh ahegao!");