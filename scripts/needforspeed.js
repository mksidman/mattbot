module.exports = function(robot) {
    robot.respond(/I have the need/i, function(msg) {
        msg.reply("...the need, for SPEED!");
        msg.reply("http://ecx.images-amazon.com/images/I/710nsn-AYoL._SL1140_.jpg")
    });
}
