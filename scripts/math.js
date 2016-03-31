module.exports = function(robot) {
  robot.respond(/calculate (.*) of (.*)/i, function(res) {
    var calc = res.match[1];
    var numArray = res.match[2].split(',').map(Number);

    //WIP on verification of Array object and numbers
    // if (stringArray instanceof Array) {
    //     numArray = stringArray.map(Number);
    // } else {
    //   res.send("Please enter a comma-separated list of numbers (ex. 1,2,3,4)");
    //   break;
    // }

    //calculates mean or median based on array input 
    switch (calc) {
      case "mean":
        var sum = numArray.reduce(function(previousValue,currentValue,index,array) {
          return previousValue + currentValue;
        });

        var mean = sum/numArray.length;
        res.send("The mean is " + mean);
        break;
      case "median":
        numArray.sort( function(a,b) {return a - b;} );

        var half = Math.floor(numArray.length/2);

        if (numArray.length % 2) {
            var median = numArray[half];
        } else {
          var median = ((numArray[half-1] + numArray[half]) / 2.0);
        };

        res.send("The median is " + median);
        break;
      default:
        res.send("Please specify if you would like to calculate the mean or median.");
    }
  });
};
