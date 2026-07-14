const express = require('express')
const router = express.Router()
const { getRecipes , addRecipes , getRecipe , editRecipes , deleteRecipes } = require("../contoller/recepi")

router.get('/',getRecipes)
router.get("/:id",getRecipe)
router.post("/",addRecipes)
router.put("/:id",editRecipes)
router.delete("/:id",deleteRecipes)



module.exports=router