const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()

mongoose.connect(`mongodb+srv://mateocanovanegas2005:${process.env.MONGO_DB_PASS}@development.oj7ijc7.mongodb.net/MM-app?retryWrites=true&w=majority`)
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Servido escuchando en el puerto ${PORT}`)
        })
        console.log('Conexión exitosa a la BD')
    })
    .catch((err) => console.log(err))

const productShema = mongoose.Schema(
    {
        inputID: String,
        Aerolinea: String,
        AeropuertoOrigen: String,
        AeropuertoDestino: String,
        ContinenteOrigen: String,
        ContinenteDestino: String,
        PaisOrigen: String,
        PaisDestino: String,
        CiudadOrigen: String,
        CiudadDestino: String

    },
    { timestamps: true }
)

const Product = mongoose.model('Product', productShema)

app.use(express.json())

app.post('/api/v1/products', (req, res) => {

    const newProduct = new Product(req.body)

    newProduct
        .save()
        .then(result => {
            res.status(201).json({ ok: true })
        })
        .catch((err) => console.log(err))
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT
