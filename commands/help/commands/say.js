var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});
var config = require("../../../config.json");

module.exports = {
	"d":"Force the bot to say something.",
	"a":[],
	"g":"o",
	"f":function (msg,bot,args,bal) {
		msg.delete();
		msg.channel.send(args.join(" "));
		return bal;
	}
}
