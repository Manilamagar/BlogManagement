const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
    Title: {
        type : Datatypes.STRING
    },
    s: {
        type: Datatypes.DATE
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return Todo
}


module.exports = makeTodoTable;