var requireDir = require('require-dir');
var functions = requireDir("../../../functions", {recurse: true});

module.exports = {
	"d":"CHEEKI BREEKI", //description of the command (shows in help)
	"a":[], //arguments needed (shows in help)
	"g":"e", //permissions of the command ("a" for admins(people with the Bot Admin role or with the administrator permission in the server), "e" for everyone or "o" for overriders)
	"f":function (msg, bot, args, bal) { //what the command does
		msg.channel.send("https://cdn.discordapp.com/attachments/514259948880920588/518590540242092035/maxresdefault.png");
		return bal;
	}
}
