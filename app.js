const express = require('express');
const app = express();
const path=require('path');
const main = require('./routers/main.js')


app.use("/", main)
app.use('/about', main)


app.use(express.static("public"));
app.listen(3000, ()=>{console.log('Servidor funcionando en el puerto 3000');});