const mongoose  = require("mongoose")

const recipeSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    incredients:{
        type:String,
        required: true
    },
    
    instruction:{
        type:String,
        required: true
    },
    
    time:{
        type:String,
        
    },
    coverimage:{
        type:String,
        
    }
},{timestamps:true})

module.exports = mongoose.model("Recipes",recipeSchema)