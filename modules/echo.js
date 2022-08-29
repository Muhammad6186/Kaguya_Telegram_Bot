class Module {
    constructor(name, run, description) {
        this.name = name;
        this.run = run;
        this.description = description;
    }
    async echo(bot, msg, match) {
        let text = match[1];
        if (!text) {
            bot.sendMessage(msg.chat.id, "Vui lòng nhập vào nội dung cần nói!");
            return;
        }
        bot.sendMessage(msg.chat.id, text);
    }
}
module.exports = new Module("echo", Module.prototype.echo, "Lặp lại tin nhắn của bạn!");