module.exports = function(robot) {
  robot.respond(/movie info for (.*)/i, function(msg) {

    //extract name of movie and save in variable
    var query = msg.match[1];

    //construct query to call omdbapi.com and handle response, parsing the body JSON
    msg.http("http://www.omdbapi.com").query({
      t: query,
      plot: "short",
      r: "json",
      tomatoes: "true"
    }).get()(function(err, res, body) {
      var movie = JSON.parse(body);

      //If JSON response = false, return the movie error. Otherwise, extract various movie info.
      if (movie.Response === "False") {
        msg.send(movie.Error)
      } else {
        msg.send("Title: " + movie.Title);
        msg.send("Poster: " + movie.Poster);
        msg.send("Actors: " + movie.Actors)
        msg.send("Plot: " + movie.Plot);
        msg.send("Rotten Tomatoes Rating: " + movie.tomatoMeter);
      }
    });
  });
};
