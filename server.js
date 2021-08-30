const express = require('express');
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(require('./source/rutas/index'))

app.listen(3000)
console.log( `La aplicación está escuchando en http://localhost:3000`)