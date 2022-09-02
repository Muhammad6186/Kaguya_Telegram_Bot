"use strict";

var fs = require("fs"),
    config = JSON.parse(fs.readFileSync("./config.json", "utf8")),
    prefix = config.prefix,
    chalk = require("chalk");
module.exports = function (bot) {
    fs.readdirSync("./modules").forEach(function (file) {
        if ("index.js" === file) return;
        var name = file.substr(0, file.indexOf("."));
        var plugin = require("../modules/" + name),
            client = new Object({
            plugins: new Array(),
            config: config
        });
        fs.readdirSync("./modules").forEach(function (file) {
            if ("index.js" === file) return;
            var name = file.substr(0, file.indexOf("."));
            client.plugins.push(require("../modules/" + name));
        }.bind(client)), bot.client = client, bot.onText(new RegExp("^" + prefix + plugin.name + "( .*)?$"), function (msg, match, client) {
            console.log(chalk.white("[ MODULE ] : ") + chalk.green(msg.from.first_name + " " + msg.from.last_name) + chalk.yellow(" " + msg.text)), plugin.run(bot, msg, match);
        });
    });
};
