const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const User = require('../database/model/Users');
const secretKey = 'mysecretkey';
const conn = require('../database/index')
function login(req, res) {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err) {
      console.error('Error retrieving user from database: ' + err);
      return res.sendStatus(500);
    }
    if (results.length === 0) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }

    const user = results[0];
    bcrypt.compare(password, user.user_password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords: ' + err);
        return res.sendStatus(500);
      }

      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.User_Id }, secretKey, { expiresIn: '1h' });
      res.send({ token, User_Id: results[0].User_Id });
    });
  });
}
function register(req, res) {
  const { username, password, email } = req.body;

  User.findByEmail(email, (err, rows) => {
    if (err) {
      res.sendStatus(err);
      return;
    }
    if (rows.length > 0) {
      res.status(400).send('Email address already in use');
      return;
    }
    if (!password) {
      res.status(400).send('Password is required');
      return;
    }

    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        res.sendStatus(err);
        return;
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          res.sendStatus(err);
          return;
        }

        User.createUser(username, hash, email, (err, result) => {
          if (err) {
            res.sendStatus(err);
          } else {
            res.sendStatus(200);
          }
        });
      });
    });
  });
}
function getAll (callback) {
  const sql = 'SELECT * FROM Users'
  conn.query(sql,  (err, results) =>{
    callback(err, results)
  });
}
const changePassword = (req, res) => {
  const { email, password } = req.body;

  User.updateUserPassword(email, password, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json('Could not update password');
    } else if (!result) {
      res.status(404).json('User not found');
    } else {
      res.json('Password updated successfully');
    }
  });
};

module.exports = { login , 
  register,
  getAll,
  changePassword
 };

