const express = require('express')
const router = express.Router()

const { login, register, getAll, changePassword } = require('../controllers/Users');
router.post('/login', login);
router.post('/register',register)
router.get('/getAll',getAll)
router.put('/changePassword',changePassword)

module.exports = router
