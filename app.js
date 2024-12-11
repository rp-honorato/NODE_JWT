/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')

/*Inicia o Express*/
const app = express();

//Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Bem vindo a nossa API!' })
})

//credendenciais
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

//
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.egfo5.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0`
).then(() => {
    app.listen(3000)
    console.log('Conectou ao banco!')
}).catch((erro) => console.log(erro, "Erro ao conectar no banco!"));

/*Disponibiliza um servidor em uma determinada porta*/
//app.listen(3000)