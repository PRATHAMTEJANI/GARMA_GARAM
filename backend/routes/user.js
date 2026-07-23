const express = require("express")
const router = express.Router()
const {userLogin,userSignup,getUser} = require("../contoller/user")

router.post("/signup",userSignup)
router.post("/login",userLogin)
router.get("/user/:id",getUser)

module.exports= router