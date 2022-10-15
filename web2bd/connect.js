const { Console } = require('console');
var mysql = require('mysql')

var con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qaz3430wsx"
})

con.connect(function(err) {
    if(err) throw err;
    console.log("connect")
})