const express = require('express')
const port = 3000 
const cors = require('cors')
const app = express()
const db = require('./databese/index')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log('server connected');
})