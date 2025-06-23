const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
    Title: {
        type : Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    },
    
    
})
return Todo
}


module.exports = makeTodoTable;