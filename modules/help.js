class Module{
    constructor(name, run, description){
        this.name = name;
        this.run = run;
        this.description = description;
    }
    async help(bot, msg, match){
        let text = ``
        bot.client.plugins.forEach(function(plugin){
            text += `${bot['client']['config']['prefix']}${plugin.name} - ${plugin.description}\n`;
        }.bind(this));
        bot.sendMessage(msg.chat.id, `Danh sách các câu lệnh có sẵn:\n${text}`);
    }
}
module.exports = new Module("help", Module.prototype.help, "Hiển thị danh sách các câu lệnh có sẵn!");