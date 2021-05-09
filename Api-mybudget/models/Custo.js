const mongoose = require('../database/index')

const Custoschema = new mongoose.Schema({
        banco: {

            type: String,
            
        },
         
        valor:{
                type: Number

         },


})

const Custo = mongoose.model('Custo', Custoschema);

module.exports = Custo;