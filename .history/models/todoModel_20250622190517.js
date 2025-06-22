const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
    Task: {
        type : Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    },
    date: {
        type: Datatypes.DATE
    }
    
})
return Todo
}


module.exports = makeTodoTable