const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
    Title: {
        type : Datatypes.STRING
    },
    subtitle: {
        type: Datatypes.
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return Todo
}


module.exports = makeTodoTable;