const Recipes = require("../models/recipe")

const getRecipes=async(req,res)=>{
    const recipes  = await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}


const addRecipes = async (req, res) => {
    try {
        const recipes = await Recipes.insertMany(req.body);

        return res.status(201).json(recipes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
};
const editRecipes = async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }

        const updatedRecipe = await Recipes.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        return res.status(200).json(updatedRecipe);

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};
const deleteRecipes=(req,res)=>{
    // res.send("hello ")
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipes,editRecipes,deleteRecipes}

