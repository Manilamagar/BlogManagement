const makeTodoTable = (sequelize, Datatypes)=>{
const Todo =sequelize.define("todo",{
    Title: {
        type : Datatypes.STRING
    },
    subtitle: {
        type: Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    }
    
})
return 
}


module.exports = makeBloggTable;