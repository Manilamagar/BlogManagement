// const sequelize = require("sequelize")
const makeBlogTable =(sequelize,Datatypes) =>{
const Blog = sequelize.define("blog",{
    title : {
        type : Datatypes.STRING
    },
    subtitle : {
        type : Datatypes.STRING
    },
    description : {
        type : Datatypes.STRING
    }
    
})
return Blog
}

module.exports = makeBlogTable;
// This code defines a Sequelize model for a blog table.
//.define() method is used to define a new model in Sequelize
// It takes two arguments: the name of the model and an object that defines the model's attributes.