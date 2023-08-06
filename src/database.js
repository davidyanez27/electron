const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'diosmeprotege1234',
    database: 'document'

});

function getConnection(){
    return connection;
};

module.exports = { getConnection }