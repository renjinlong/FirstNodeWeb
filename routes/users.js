var express = require('express');

// var mysql = require('mysql');
// var session = require('express-session');

var router = express.Router();

// var connection = mysql.createConnection({
//   host: '',
//   user: '',
//   password: ''
// });

// connection.connect();

// connection.query('select * from apps', function (err, rows, fields) {
//   if (err) throw err;

//   console.log(rows[0].solution);
// });

// connection.end();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
