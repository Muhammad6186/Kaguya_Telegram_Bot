const request = require("request")
const fs = require("fs-extra")
class Module{
    constructor(name, run, description){
        this.name = name;
        this.run = run;
        this.description = description;
    }
    async run(bot, msg, match){
        const voice = match[1];
        if(!voice) return bot.sendMessage(msg.chat.id, "Vui lòng nhập vào nội dung cần nói!");
        const voice_url = `https://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=${voice.length}&client=tw-ob&q=${voice}&tl=vi&prev=input`;
        const voice_file = `./voice/${voice}.ogg`;
        const voice_file_stream = fs.createWriteStream(voice_file);
        request(voice_url).pipe(voice_file_stream);
        voice_file_stream.on("finish", function(){
            bot.sendVoice(msg.chat.id, voice_file).then(function(){
                fs.unlink(voice_file, function(err){
                    if(err){
                        console.log(err);
                    }
                }.bind(this));
            });
        });
    }
}
module.exports = new Module("voice", Module.prototype.run, "Gửi voice của bạn!");