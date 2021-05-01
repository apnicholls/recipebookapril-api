const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../lib/db');


// Models (tables) are defined here
class Category extends Model {
}
// Model attributes are defined here 
Category.init({
    name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'Category',
});
//------------------------------------------------------
class Recipe extends Model {
}
Recipe.init({
    titleTxt: {
        type: 'LONGTEXT'
    },
 }, {
    sequelize, // pass the conection instance
    modelName: 'Recipe', // choose the model name
});
Category.hasMany(Recipe, {foreignKey: 'categoryId'});
Recipe.belongsTo(Category, {foreignKey: 'categoryId'});

//------------------------------------------------------
class Content extends Model {
}
Content.init({
    descTxt: {                  // description of recipe
        type: 'LONGTEXT'
    },
    ingredientsTxt: {           // ingredients for recipe
        type: 'LONGTEXT'
    },
    methodTxt: {                // cooking instructions for recipe
        type: 'LONGTEXT'
    },
    commentsTxt: {              // comments from author and can be added to by other readers
        type: 'LONGTEXT'
    }, 
}, {
    sequelize,
    modelName: 'Content',
});
Recipe.hasMany(Content, {foreignKey: 'recipeId'});
Content.belongsTo(Recipe, {foreignKey: 'recipeId'});

/* class User extends Model {
}
User.init({
    // Model attributes are defined here
    email: {
        type: 'LONGTEXT'
        // allowNull: false
    },
    password: {
        type: 'LONGTEXT'
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});

User.hasMany(Question, {foreignKey: 'userId'});
Question.belongsTo(User, {foreignKey: 'userId'});  */
//------------------------------------------------------

sequelize.sync({ alter: true });  // This line keeps the database and changes in sync automatically 

// delete the data be careful
// sequelize.sync({force: true});

module.exports = {
    Category, Recipe, Content // will add user later
};


