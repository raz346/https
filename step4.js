var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};
function getHTML (options, callback) {
  var dataReceived = '';
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      dataReceived += data;
    });
    response.on('end', function(){
      callback(dataReceived)
    });
  });
}

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);