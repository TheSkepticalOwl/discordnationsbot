var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});

module.exports = {
	"d":"Tells you the DNP time. Format: D/M/Y H:M",
	"a":[],
	"g":"e",
	"f":function (msg, bot, args, bal) {
		var date = functions.date();
		msg.channel.send("```" + 
			zero(date.day) + "/" + 
			zero(date.monthNum) + "/" +
			date.year + " " +
			zero(date.hour) + ":" +
			zero(date.minute) + "```");
    msg.delete();
		return bal;
	}
}

function zero(n) {
	return ("0" + n).slice(-2)
}
