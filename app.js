const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    console.log('Petición recibida')


    res.status(200).send('<h1>Hola Mundo sin .env</h1>')
})

const PORT = process.env.PORT

app.listen(parseInt(PORT), () => {
    console.log('Servidor escuchando en el puerto', PORT)
})





