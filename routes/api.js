var express = require('express');
var router = express.Router();

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









module.exports = router;