const mongoose = require('../database/index')

const Cadastroschema = new mongoose.Schema({
        nome:{

            type: String,
            
        },
         
        email:{
                type: String,

         },

         senha:{

            type: Number,

         }


})

const Cadastro = mongoose.model('Cadastro', Cadastroschema);

module.exports = Cadastro;