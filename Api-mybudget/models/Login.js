const mongoose = require('../database/index')

const Loginschema = new mongoose.Schema({
        
         
        email:{
                type: String,

         },

         senha:{

            type: Number
         }


})

const Login = mongoose.model('Login', Loginschema);

module.exports = Login;