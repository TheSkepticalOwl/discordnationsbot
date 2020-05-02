var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});
var config = require("../../../config.json");

module.exports = {
	"d":"Are you an overrider?",
	"a":[],
	"g":"o",
	"f":function (msg,bot,args,bal) {
		msg.channel.send("Yep. You're an overrider.");
		return bal;
	}
}
