const connection = require("../index")
const bcrypt = require('bcrypt');


function findByEmail(email, callback) {
    const query = 'SELECT * FROM users WHERE user_email = ?';
    connection.query(query, [email], (err, results) => {
      if (err) {
        console.error('Error retrieving user from database: ' + err);
        callback(err);
        return;
      }
      callback(null, results)
    });
  }
  function createUser(username, password, email, callback) {
    const query = 'INSERT INTO users (user_name, user_password, user_email) VALUES (?, ?, ?)';
    connection.query(query, [username, password, email], (err, result) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, result);
    });
  }
  const updateUserPassword = (email, password, callback) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    const sql = 'UPDATE users SET user_password = ? WHERE user_email = ?';
  
    connection.query(sql, [hash, email], (err, result) => {
      if (err) {
        callback(err, null);
      } else if (result.affectedRows === 0) {
        callback(null, false); // User not found
      } else {
        callback(null, true); // Password updated successfully
      }
    });
  };

  module.exports = { findByEmail,
    createUser,
    updateUserPassword
 };
  