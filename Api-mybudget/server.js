
const express = require('express')
const Custo = require("./models/Custo")
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

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

