

const makeProductTable = (sequelize, Datatypes)=>{
const Product =sequelize.define("product",{
    name: {
        type : Datatypes.STRING
    },
    price: {
        type: Datatypes.FLOAT
    },
    quantity:{
        type: Datatypes.STRING
    },
    discription: {
        type: Datatypes.STRING
    },
    columns: {
        type: Datatypes.STRING
    }
    
})
return Product
}


module.exports = makeProductTable;