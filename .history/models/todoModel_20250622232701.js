const makeTable = (sequelize, Datatypes)=>{
const Blogg =sequelize.define("blogg",{
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