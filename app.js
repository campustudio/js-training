var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views')); // used in render logic
app.use(express.static(path.join(__dirname, 'public'))); // used in views/index.html as relative

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});