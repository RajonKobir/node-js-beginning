// console.log("I'm here!");



// setTimeout(function(){
//     console.log("3 secodns have passed!");
// }, 3000);



// var t=0;
// var timer = setInterval(function(){
//     t=t+3;

//     if (t>15){
//         clearInterval(timer);
//         console.log("maximum loop exceed!");
//     }

//     console.log(t+" secodns have passed!");

// }, 3000);



// console.log(__dirname);
// console.log(__filename);

// var a = require('./count');
// var stuff = require('./count');

// // console.log(a(["a", "b", "c", "d", "e"]));

// // look here at the counter part, it is actually taking the arguments. and doing everything.
// // We need to intialise the 'counter variable first.'
// console.log(stuff.counter(['Hello','This is','Saif']));
// console.log(stuff.adder(5,6));
// console.log(stuff.bi);
// console.log(stuff.adder(stuff.bi,44));



// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message){
//     console.log(message);
// });

// myEmitter.emit('someEvent', 'the event was emitted!');



// var events = require('events');
// var util = require('util');

// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];

// people.forEach(function(person){
//     person.on('speak', function(message){
//         console.log(person.name + 'said: ' + message);
        
//     });
// });

// james.emit('speak', 'hey dudes!')
// ryu.emit('speak', 'I want a curry!')


// // synchronus version of fs module
// // for read and write files
// var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// // console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);


// asynchronus version of fs module
// for read and write files
// var fs = require('fs');

// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('writeMe.txt', data, (err) => {});
// });




// create or remove directories

// var fs = require('fs');

// // fs.unlink('writeMe.txt', (err) => {} );

// // fs.mkdir('logics', (err) => {});

// // fs.mkdir('stuffs', function(){
// //     fs.readFile('readMe.txt', 'utf8', function(err, data){
// //         fs.writeFile('stuffs/writeMe.txt', data, (err) => {});
// //     });
// // });

// // fs.rmdir('logics', (err) => {});

// fs.unlink('stuffs/writeMe.txt', function(){
//     fs.rmdir('stuffs', (err) => {});
// });



// // create a server

// var http = require('http');

// var server = http.createServer(function(req, res){
//     if(req.url !== '/favicon.ico'){
//         console.log('request was made:' + req.url);
//     }
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hi Rajon!')
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listenning to the port 3000!');



// // streams and buffers

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')

// myReadStream.on('data', function(chunk){
//     console.log('new chunk receieved!');
//     myWriteStream.write(chunk);
// });



// // PIPES

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')

// myReadStream.pipe(myWriteStream);




// // Pipes in a server

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')


// var server = http.createServer(function(req, res){
//     if(req.url !== '/favicon.ico'){
//         console.log('request was made:' + req.url);
//     }
//     res.writeHead(200, {'content-type': 'text/plain'});
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listenning to the port 3000!');





// send html to the client server
//Pipes in a server with html file

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/rajon.html', 'utf8');


// var server = http.createServer(function(req, res){
//     if(req.url !== '/favicon.ico'){
//         console.log('request was made:' + req.url);
//     }
//     res.writeHead(200, {'content-type': 'text/html'});
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('now listenning to the port 3000!');






// // serving json to server

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/rajon.html', 'utf8');


// var server = http.createServer(function(req, res){
//     if(req.url !== '/favicon.ico'){
//         console.log('request was made:' + req.url);
//     }
//     res.writeHead(200, {'content-type': 'application/json'});
//     // myReadStream.pipe(res);
//     var myObj = {
//         name: 'rajon',
//         job: 'developer',
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));

// });

// server.listen(3000, '127.0.0.1');
// console.log('now listenning to the port 3000!');






// // basic routing

// var http = require('http');
// var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/rajon.html', 'utf8');


// var server = http.createServer(function(req, res){
//     if(req.url !== '/favicon.ico'){
//         console.log('request was made:' + req.url);
//     }

//     if(req.url === '/' || req.url === '/home'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/rajon.html').pipe(res);
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contact.html').pipe(res);
//     }
//     else if(req.url === '/api'){
//         res.writeHead(200, {'content-type': 'application/json'});
//         var myObj = {
//             name: 'rajon',
//             job: 'developer',
//             age: 29
//         };
//         res.end(JSON.stringify(myObj));
//     }
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }

// });

// server.listen(3000, '127.0.0.1');
// console.log('now listenning to the port 3000!');




// // introduction to express
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send('this is the homepage!')
// });

// app.get('/contact', function(req, res){
//     res.send('this is the contact page!')
// });

// app.get('/about', function(req, res){
//     res.send('this is the about page!')
// });


// app.listen(3000);



// // route parameters
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send('this is the homepage!')
// });

// app.get('/contact', function(req, res){
//     res.send('this is the contact page!')
// });

// app.get('/profile/:id', function(req, res){
//     res.send('you are requesting id:' +req.params.id);
// });


// app.listen(3000);




// // template engine
// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/rajon.html')
// });

// app.get('/contact', function(req, res){
//     res.sendFile(__dirname + '/contact.html')
// });

// app.get('/profile/:id', function(req, res){
//     var data = {age: 29, job: 'ninja', hobbies: ['reading', 'writting', 'swimming']};
//     res.render('profile', {person: req.params.id, data: data});
// });


// app.listen(3000);




// // partial templates
// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets')); //serve the assets files

// app.get('/', function(req, res){
//     res.render('index');
// });

// app.get('/contact', function(req, res){
//     res.render('contact');
// });

// app.get('/profile/:id', function(req, res){
//     var data = {age: 29, job: 'ninja', hobbies: ['reading', 'writting', 'swimming']};
//     res.render('profile', {person: req.params.id, data: data});
// });


// app.listen(3000);





// // query strings
// var express = require('express');
// var app = express();

// app.set('view engine', 'ejs');
// app.use('/assets', express.static('assets')); //serve the assets files

// app.get('/', function(req, res){
//     res.render('index');
// });

// app.get('/contact', function(req, res){
//     res.render('contact', {qs: req.query});
// });

// app.get('/profile/:id', function(req, res){
//     var data = {age: 29, job: 'ninja', hobbies: ['reading', 'writting', 'swimming']};
//     res.render('profile', {person: req.params.id, data: data});
// });


// app.listen(3000);





// handling post requests 
// sending email using nodemailer package
"use strict";
var express = require('express');
var bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); //serve the assets files

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});



    //nodemailer
app.post('/contact', urlencodedParser, function(req, res){
    // console.log(req.body);

if(req.body.email !== ''){
//nodemailer
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kobiruddin.ginilab@gmail.com', // generated ethereal user
    pass: 'Rajon100337', // generated ethereal password
  },
});

let mailOptions = {
  from: 'Rajon Kobir', 
  to: req.body.email,
  subject: 'Nodemailer - Test',
  text: 'Welcome From Rajon Kobir!!'
  // html: "<b>" +req.body.name+ "</b><h1> https://myaccount.google.com/lesssecureapps </h1> <table> <tr> <th> Name </th> <th> Roll </th> <th> Class </th> </tr> <tr> <td> Anil </td> <td> 01 </td> <td> 5 </td> </tr> <tr>  <td> Sunil </td> <td> 02 </td> <td> 5 </td> </tr> </table> ",
    // html: req.body.name
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
       console.log('Error occurs'+err);
  }else{
      console.log('Mail Sent');
  }
  
});

}

    res.render('contact-success', {data: req.body});
});



app.get('/profile/:id', function(req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['reading', 'writting', 'swimming']};
    res.render('profile', {person: req.params.id, data: data});
});


app.listen(3000);

console.log("listenning to Port 3000");






















