var https = require('https');
function getAndPrintHTMLChunks () {
  var dataReceived = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
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
getAndPrintHTMLChunks();