const mysql = require("mysql");

myconnection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

myconnection.connect(error => {
    if( error )throw error;
    console.log("Successfully Connected to The Database");
});

module.exports = myconnection;
