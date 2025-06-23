const makeTodoTable = (sequelize, Datatypes)=>{
const Blogg =sequelize.define("todo",{
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
return Blogg
}


module.exports = makeBloggTable;