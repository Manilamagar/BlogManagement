const makeBloggTable = (sequelize, Datatypes)=>{
const  =sequelize.define("todo",{
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
return Todo
}


module.exports = makeTodoTable;