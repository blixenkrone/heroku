// Initialize Firebase
function setupFirebase() {
  var config = {
    apiKey: "AIzaSyC5-R7-RodWtu4htfrQrkOCDvLHuFWtgQo",
    authDomain: "simple-supermarket.firebaseapp.com",
    databaseURL: "https://simple-supermarket.firebaseio.com",
    projectId: "simple-supermarket",
    storageBucket: "simple-supermarket.appspot.com",
    messagingSenderId: "17693044736"
  };
  firebase.initializeApp(config);
}
setupFirebase();
// Initialize Firebase

// --------------------------------------------------

//Setup Heroku
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
//Setup Heroku

// --------------------------------------------------

//Code start
var database = firebase.database();

var groceryData = {
  name: 'eggs',
  qty: 10,
  price: 50
}

var groceries = database.ref('groceries');
groceries.push(groceryData);

var ref = database.ref('groceries');
ref.on("value", gotData, errData);

function gotData(data) {
  console.log(data.val());
}

function errData(err) {
    console.log(err);
}
