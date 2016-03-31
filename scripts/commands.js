module.exports = function(robot) {
  robot.respond(/commands/i, function(res) {
    res.reply("Reply 'movie info for <movie>', replacing <movie> with title of your choice");
    res.reply("Reply 'do we have class today', to check if we have class");
    res.reply("Reply 'calculate <mean OR median> of <comma separated numbers>' to perform the respective calculation (mode coming in v2!)'")
  });
};
