const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin0987',
    port : 2668
});

//connect
db.connect((err) => {
if(err){
throw err;
}
console.log('mysql connected');
});


const app = express();

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('datavase created...');
    });
});

app.listen('2668',() => {
    console.log('server started port number 2668');
});