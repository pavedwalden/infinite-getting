var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');

var request = require('request');
request('https://twitter.com/HistoryInPics/media', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(body) // Print the google web page.
    console.log("success");
  }
  $ = cheerio.load(body);

 // works in console but not in practice -- var links = $('.TwitterPhoto-mediaSource').map(function() {return this.src;});
  
  //var links = $('.TwitterPhoto-mediaSource').map(function() {console.log(this.src);});
  var links = []
  $('.TwitterPhoto-mediaSource').each(function(i,e) { 
  	links.push($(e).attr("src"));
  });
  console.log("here are the links");
  console.log(links);

  request(links[0]).pipe(fs.createWriteStream('image0.jpg'));
})