const express = require('express')
const Contenedor = require('./Contenedor')

const contenedor = new Contenedor("./productos.txt");

const app = express()
const PORT = 8080
app.listen(8080)
console.log(`Servidor Http escucnado en: http://localhost:${PORT}`)

app.get ('/productos', async (req, res) => {
  res.send(await contenedor.getAll())
})

app.get ('/productoRandom', async (req, res) => {
  res.send(await contenedor.getRandom())
})
