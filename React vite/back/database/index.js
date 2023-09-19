const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ines+est123a1',
  database: 'assilData'
});
connection.connect((err)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log('db conntected');
  }
})

module.exports = connection;