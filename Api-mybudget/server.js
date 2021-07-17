
const express = require('express')
const Custo = require("./models/Custo")
const Custo = require("./models/Orcamento")
const Custo = require("./models/Login")
const Custo = require("./models/Cadastro")
const Orcamento = require('./models/Orcamento')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/custos', async (req, res) => {
  try {
     const custos = await Custo.find()
     return res.send({ custos })
  } catch(err)
  {
    console.log(err);
  }
})

app.post('/custos', async (req, res)=> {
    try{
    const custo = await Custo.create({...req.body});
    return res.send({ custo });
    } catch(err){
    console.log(err);
    }
    });


    app.get('/Orcamento', async (req, res) => {
      try {
         const Orcamento = await Orcamento.find()
         return res.send({ Orcamento })
      } catch(err)
      {
        console.log(err);
      }
    })
    
    app.post('/Orcamento', async (req, res)=> {
        try{
        const Orcamento = await Orcamento.create({...req.body});
        return res.send({ Orcamento });
        } catch(err){
        console.log(err);
        }
        });


      app.get('/Login', async (req, res) => {
          try {
             const Login = await Login.find()
             return res.send({ Login })
          } catch(err)
          {
            console.log(err);
          }
        })
        
        app.post('/Login', async (req, res)=> {
            try{
            const Login = await Login.create({...req.body});
            return res.send({ Login });
            } catch(err){
            console.log(err);
            }
            });

            
            app.get('/Cadastro', async (req, res) => {
              try {
                 const Cadastro = await Custo.find()
                 return res.send({ Cadastro })
              } catch(err)
              {
                console.log(err);
              }
            })
            
            app.post('/Cadastro', async (req, res)=> {
                try{
                const Cadastro = await Custo.create({...req.body});
                return res.send({ Cadastro });
                } catch(err){
                console.log(err);
                }
                });


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

