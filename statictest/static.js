module.exports = function (){
  var http = require('http');
  var fs = require('fs');
  return {
   static: function (request, response){

    response.writeHead(200, {'Content-type': 'text/html'});
    console.log('Request', request.url);
    if(request.url.indexOf('/views/') != -1){
      fs.readFile('.'+request.url+'.html', 'utf8', function(errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
          response.write(contents); 
          response.end();
        })
    }
    else if(request.url.indexOf('/css/') != -1){
      fs.readFile('.'+request.url, 'utf8', function(errors, contents){
          response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
          response.write(contents); 
          response.end();
        })
    }
    else if(request.url.indexOf('/images/') != -1){
        // notice we won't include the utf8 encoding
        console.log(request.url);
        fs.readFile('.'+request.url+'.jpg', function(errors, contents){
          console.log(request.url);
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
        })
      }
      else {
        response.writeHead(404);
        response.end('File not found!!!');
      }
    }
  }
}();