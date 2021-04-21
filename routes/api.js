var express = require('express');
var router = express.Router();
const {Category, Recipe} = require('../lib/models');

// get all categories
// get all recipes associated with a category
// add a recipe
// edit a recipe
// delete a recipe


// get a list of the food categories
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({});
    res.json(categories);
});
// create a new recipe associated to a category
router.post('/categories/:categoryId/recipes', async function(req, res, next) {
    let body = req.body;
    body.categoryId = req.params.categoryId
    let recipe = await Recipe.create(body);
    res.json(recipe);
});
// get recipes associated with a category id 
router.get('/categories/:categoryId/recipes', async function(req, res, next) {
    let recipes = await Recipe.findAll({where: {categoryId: req.params.categoryId}});
    res.json(recipes);
});

router.get('/categories/:categoryId/recipes/:recipeId', async function(req, res, next) {
    let recipe = await Recipe.findAll({where: {category: req.params.categoryId, recipeId: req.params.recipeId}});
    res.json(recipe);
});

// get all recipes for all categories 
router.get('/categories/recipes', async function(req, res, next) {
    let recipes = await Recipe.findAll({});
    res.json(recipes);
});

router.delete('recipes/:recipeId', async function (req,res, next){
    let recipe = await Recipe.destroy({
        where: {recipeId: req.params.recipeId}    
    });
    res.json(recipe)
});









module.exports = router;