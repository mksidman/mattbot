module.exports = function(robot) {
  robot.respond(/do we have class today/i, function(msg) {
    var date = new Date();
    var today = date.getDay();

    //translate today value into text day of week
    switch (today) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
    }

    //conditional statement to determine if today is a class day, and return appropriate response
    if (today === 1 || today === 3) {
      msg.reply("Today is " + day + ". You bet we have class! Sharpen those pencils! :memo:");
    } else {
      msg.reply("Today is " + day + ". Class is only Monday and Wenesday. Schools out! :raised_hands:");
      msg.reply("https://www.youtube.com/watch?v=OUugQoxS8_o");
    };
  });
}
