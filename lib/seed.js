// create the initial categories in the database

const {Category} = require('../lib/models');

const seedTheDatabase = async () => {
    let categories = await Category.findAll({});
    if (categories.length == 0) {
        await Category.create({name: 'Soups'});
        await Category.create({name: 'Appetizers'});
        await Category.create({name: 'Salads'});
        await Category.create({name: 'Main Courses'});
        await Category.create({name: 'Deserts'});
    }
};

seedTheDatabase()