
const express = require("express");

const app = express();

const cors = require("cors");

const puerto = 2005;



//-----------



const { getinfo } = require("./controllers/getinfo")

app.use(cors());

app.get("/",getinfo)






//-----------
app.listen(puerto ,()=>{
    console.log(`Servidor arriva ok en el puerto ${puerto}`);
});