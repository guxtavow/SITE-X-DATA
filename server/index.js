const express = require("express");

const PORT = 8001; //porta

const app = express();


//ROTA PRINCIPAL
app.get("/", (req, res) => {
    res.json({mensagem:"Só um teste"})  //json teste
})


//servidor
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});