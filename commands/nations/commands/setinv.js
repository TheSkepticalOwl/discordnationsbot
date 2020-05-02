var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});
var config = require("../../../config.json");
var c = requireDir("../../", {recurse: true});

module.exports = {
	"d":"Sets the info of your nation.",
	"a":["info"],
	"g":"e",
	"f":function (msg,bot,args,bal) {
		if (bal.nations[msg.author.id]) {
			if (args[0] == undefined) {
				msg.channel.send("Wat?")
			}
			else {
				bal.nations[msg.author.id].invite = args.join(" ");
				msg.channel.send("Got it.");
			}
		}
		else {
			msg.channel.send("You have no nation.");
		}
        	return bal;
	}
}
