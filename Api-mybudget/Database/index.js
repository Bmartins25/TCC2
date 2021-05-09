const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user:martins10@cluster0.nzf0g.mongodb.net/BancoProjeto?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    })


module.exports = mongoose;