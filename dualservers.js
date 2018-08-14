const HTTP = require('http'); 
const PORT1 = 7000;
const PORT2 = 7500;

const Quotes=["You suck!","Go Away!","No one needs you!","You're an aweful coder! Just awful!","Good stuff!!","Amazing job!","You're going to do big thinks man"]
var goodQuote= Quotes[Math.floor(Math.random()*5)];
var badQuote= Quotes[(Math.floor(Math.random()*3))+5];

let handleRequest1 = (request,response) => { //fat arrow function. Syntactic advantage
    response.end(goodQuote + request.url, 'html'); //response server (only available through http) 
    //response.end is whats returned at end of response //html is the type of data

}

let handleRequest2 = (request,response) => { //fat arrow function. Syntactic advantage
    response.end(badQuote + request.url, 'html'); //response server (only available through http) 
    //response.end is whats returned at end of response //html is the type of data

}

const server1 = HTTP.createServer(handleRequest1);
const server2 = HTTP.createServer(handleRequest2);
''
//handleRequest...

server1.listen(PORT1, function() {
    //log server side when our surver is started
    console.log('Server listening on: http://localhosts:'+PORT1);

});
server2.listen(PORT2, function() {
    //log server side when our surver is started
    console.log('Server listening on: http://localhosts:'+PORT2);

});
