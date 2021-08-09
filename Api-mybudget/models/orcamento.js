const mongoose = require('../database/index')

const Orcamentoschema = new mongoose.Schema({
        Contas: {

            type: String,
            
        },
         
        Alimentacao:{
                type: String,

         },

         Eventos: {
             type: String,
         },

         Transportes: {
                type: String,

         },

         Compras: {
                type: String,

         },


})

const Orcamento = mongoose.model('Orçamento', Orcamentoschema);

module.exports = Orcamento;