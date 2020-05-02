var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});
var config = require("../../../config.json");

module.exports = {
	"d":"Join the UDN Server",
	"a":[],
	"g":"e",
	"f":function (msg,bot,args,bal) {
		if (msg.guild.id != 563496930794143753) {
			msg.channel.send("https://discord.gg/ZCnvjGk");
		} else {
			msg.channel.send("You're talking in the UDN server right now!");
		}
		return bal;
	}
}
