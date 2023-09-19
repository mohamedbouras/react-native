const express = require ("express")
const router = express.Router()
const blogCntrl = require("../controller/blogController")

router.post("/api/createblog",blogCntrl.create)

router.get("/getall",blogCntrl.get)

router.get("/getbyname/:user_name",blogCntrl.getByUsername)

router.delete("/api/delete/:user_name",blogCntrl.deleteOne)

router.put("/update/:user_name",blogCntrl.update)

module.exports = router