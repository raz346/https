var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};
function getAndPrintHTMLChunks () {
  var dataReceived = '';
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data){
      dataReceived += data;
    })
    response.on('end', function() {
      console.log(dataReceived);
    })
  });
}
getAndPrintHTMLChunks(requestOptions);