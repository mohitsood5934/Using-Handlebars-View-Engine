var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var app = express();
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.set('port',(process.env.PORT || 3000))




app.get('/',function(req,res){

var people = ['mohit','rohit','namit']

res.render('home',{
	content:'this is some content',
	published:false,
	people:people
});


});





app.listen(app.get('port'),function(){
console.log('server started on the port' +app.get('port'))
});