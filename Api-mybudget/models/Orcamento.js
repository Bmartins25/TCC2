const mongoose = require('../database/index')

const Orcamentoschema = new mongoose.Schema({
        banco: {

            type: String,
            
        },
         
        valor:{
                type: Number

         },


})

const Orcamento = mongoose.model('Orçamento', Orcamentoschema);

module.exports = Orcamento;