const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const cadastro = require("./login/cadastro")


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/login', function(req, res){
    res.render('cadastro');
    
});

app.post('/add-cadastro', function(req, res){
    pagamento.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.redirect('/cadastro')
        //res.send("usuário cadastrado com sucesso!")
    }).catch(function(erro){
        res.send("Usuário não cadastrado" + erro)
    })
    
})

app.listen(8080);