const mysql = require('mysql2')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Ines+est123a1',
    database : 'Native'
})
conn.connect((err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log('db connected');
    }
})
module.exports = conn